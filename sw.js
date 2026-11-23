// Professions CDs Tracker – service worker: receives push signals and shows the notification.
const SERVER = new URL(self.location.href).searchParams.get("server") || "";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

async function subId(endpoint) {
  const h = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(endpoint));
  return [...new Uint8Array(h)].slice(0, 12).map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function handlePush() {
  let messages = [];
  try {
    const sub = await self.registration.pushManager.getSubscription();
    if (sub && SERVER) {
      const id = await subId(sub.endpoint);
      const res = await fetch(SERVER + "/messages?id=" + id, { cache: "no-store" });
      if (res.ok) messages = (await res.json()).messages || [];
    }
  } catch (e) { /* fall through to a generic notification */ }

  if (!messages.length) {
    return self.registration.showNotification("Cooldown ready", { body: "Open the app to see which one.", tag: "cooldown-generic" });
  }
  return Promise.all(messages.map((m, i) =>
    self.registration.showNotification(m.title, { body: "Ready in WoW Forever.", tag: "cd-" + m.at + "-" + i })));
}

self.addEventListener("push", (e) => e.waitUntil(handlePush()));

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    if (all.length) return all[0].focus();
    return self.clients.openWindow(self.registration.scope);
  })());
});
