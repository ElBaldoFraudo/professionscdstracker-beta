# Professions CDs Tracker

Never miss a profession cooldown in **World of Warcraft: Forever** again.

Professions CDs Tracker keeps track of the long profession cooldowns for **all your characters** and sends a **notification to your phone** when one is ready:

| Cooldown | Profession | Length |
|---|---|---|
| Transmute: Arcanite / Legionite | Alchemy | 47 h (shared transmute timer) |
| Elemental transmutes (Air to Fire, Earth to Water …) | Alchemy | 23 h (shared transmute timer) |
| Transmute: Iron to Gold / Mithril to Truesilver | Alchemy | 1 h |
| Salt Shaker (Refined Deeprock Salt) | Leatherworking | 71 h |
| Mooncloth | Tailoring | 95 h |
| Dedicated Study | Legacy talent | 23 h | 

**Open the app:** https://professionscdstracker-beta.pages.dev

---

## What you get

- 📱 **A phone app** (works on iPhone and Android) with all your characters and live countdowns.
- 🔔 **Notifications** when a cooldown is ready – even when the app is closed.
- 🎮 **A WoW addon** with a small tracker window in game, so you see every character's cooldowns at a glance.
- 🔄 **Automatic sync**: use a cooldown in game and your phone updates by itself within seconds.

You can use the phone app on its own (tap **Used now** when you use a cooldown), or add the addon and PC helper so everything happens automatically.

---

## Setup (about 10 minutes)

### 1. Phone
1. Open **https://professionscdstracker-beta.pages.dev**
   - **iPhone:** in Safari, tap **Share → Add to Home Screen**, then open the app from its new icon.
   - **Android:** in Chrome, tap **⋮ → Install app** (or *Add to Home screen*).
2. The welcome guide opens. Tap **Turn on notifications** and allow them.
3. Tap **Create sync code** and write the code down – you'll need it on your PC.
4. Optional: **Settings → Send test** and lock your phone to check notifications arrive.

> iPhone needs iOS 16.4 or later, and the app must be opened from the home-screen icon for notifications to work.

### 2. The WoW addon (Windows PC)
1. Download **[ProfCDs-addon.zip](https://professionscdstracker-beta.pages.dev/ProfCDs-addon.zip)** and unzip it.
2. Copy the **ProfCDs** folder into:
   ```
   C:\World of Warcraft\_forever_\Interface\AddOns
   ```
   It must end up as `AddOns\ProfCDs\ProfCDs.toc` (not `AddOns\ProfCDs\ProfCDs\…`).

### 3. The PC helper (Windows PC)
The helper is a small background program that sends your cooldowns from the game to your phone.

1. Download **[ProfCDs-PC.zip](https://professionscdstracker-beta.pages.dev/ProfCDs-PC.zip)** and unzip it.
2. Double-click **install.cmd**.
   - If Windows says *"Windows protected your PC"*, click **More info → Run anyway** (the script is not signed, that's all).
3. Enter your **sync code** from the phone app.

That's it. The helper runs invisibly and starts by itself every time you log in to Windows.

### 4. In game
1. On the character screen, open **AddOns** and make sure **Professions CDs Tracker** is ticked.
   If it says *Out of date*, tick **Load out of date AddOns**.
2. Log in. A welcome window explains the addon, and the tracker window appears.
3. On each crafter, **open the profession window once** so the addon can see its recipes.
4. Play as usual. Your cooldowns show up on your phone marked **"from the game"**.

---

## In-game controls

| Action | How |
|---|---|
| Show / hide the tracker window | Left-click the **minimap button** (alchemy icon) or type `/cds` |
| Status window (what the addon sees) | Right-click the minimap button or type `/cds status` |
| Lock / unlock the tracker position | `/cds lock` / `/cds unlock` |
| Show the welcome window again | `/cds help` |

The addon keeps tracking in the background even when the tracker window is hidden.

---

## How it works

```
 WoW (addon)  ──►  combat log + saved file  ──►  PC helper  ──►  sync server  ──►  your phone
                                                                     │
                                                       sends notifications when ready
```

- When you use a profession cooldown, the addon makes WoW write it to the **combat log** right away. The PC helper reads it and sends it to the sync server within seconds.
- When you **log out or switch character**, the addon saves the exact cooldowns of that character, and the helper sends those too. This is also how cooldowns that were already running get picked up the first time.
- The sync server stores your timers under your **sync code** and sends the notification when a cooldown is ready.

---

## FAQ

**Do I need the PC part?**
No. Without it, the app works as a manual tracker: tap **Used now** when you use a cooldown, or **Set time left** if you forgot. The addon and PC helper just make it automatic.

**Can I use it on several phones or PCs?**
Yes. Use the **same sync code** everywhere: on another phone go to **Settings → Sync with WoW → Use another code**, and on another PC enter it when you run the installer.

**Is my sync code private?**
Each code is unique – the server checks that no one else has it before handing it out. Treat it like a password: anyone who knows your code can see and change your timers. Don't share it unless you want to share your timers.

**Is the addon allowed?**
It only uses normal addon features and the game's own combat log file (the same file Warcraft Logs uses). The PC helper only reads that log file and the addon's saved file. It does not read game memory, automate anything or touch the game client.

**What data is sent?**
Only your character names, which cooldown, and when it's ready – nothing else from your PC.

**Does it work with a non-English WoW client?**
Not yet – spell names are matched in English.

**Does it work on Mac?**
The addon does, but the PC helper is Windows-only for now. On a Mac you can use the app manually.

---

## Troubleshooting

**The phone doesn't update**
1. In game, type `/cds status` – check that combat logging is **ON** and that you've opened the profession window on that character.
2. Check the helper log: paste `%LOCALAPPDATA%\ProfCDsHelper\helper.log` into the File Explorer address bar. You should see lines like `Cast seen: …` and `Sent … report(s)`.
3. Make sure the app and the PC helper use the **same sync code** (app: **Settings → Sync with WoW**). To change the code on the PC, run **install.cmd** again.

**No notifications**
- iPhone: the app must be opened from the home-screen icon, and notifications must be allowed in **Settings → Notifications → CDs Beta**.
- Try **Settings → Send test** in the app.
- Android: battery saving can delay notifications – turn off battery optimisation for Chrome.

**A cooldown shows the wrong time**
Log out or switch character once – the addon then sends the exact value from the game. You can also correct it by hand with **Set time left**.

---

## Uninstall

- **PC helper:** double-click **uninstall.cmd** (in the ProfCDs-PC folder).
- **Addon:** delete `Interface\AddOns\ProfCDs`.
- **App:** remove the icon from your home screen.

---

*Fan-made tool. Not affiliated with or endorsed by Blizzard Entertainment. World of Warcraft is a trademark of Blizzard Entertainment.*
