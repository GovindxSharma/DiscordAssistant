
## 🤖 DiscordAssistant – A Simple Bot Using Discord.js

> A minimal Discord bot built with `discord.js v14` and `Node.js`, designed to respond to basic commands like `ping` and `Hello`. This project demonstrates event handling, message listening, and interaction replies using modern Discord API intents.

---

### 🎯 Features

* ✅ Replies with `Pong!` to `/ping` slash command
* ✅ Replies to text messages:

  * `ping → pong`
  * `Hello → Hello <username>`
* ✅ Logs every received message to the console
* 🔐 Uses `.env` to keep your bot token secure

---

### 🧠 Tech Stack

* **Node.js**
* **discord.js v14**
* **dotenv**
* **ESM Modules (type: "module")**
* **Nodemon** for auto-reloading

---

### 🧾 Setup Instructions

1. **Clone the repo**

   ```bash
   git clone https://github.com/GovindxSharma/DiscordAssistant.git
   cd DiscordAssistant
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   ```env
   TOKEN=your_discord_bot_token_here
   ```

4. **Run the bot**

   ```bash
   npm start
   ```

> Make sure your bot has the correct **intents** enabled in the [Discord Developer Portal](https://discord.com/developers/applications), especially:
>
> * Message Content Intent
> * Server (Guild) Members Intent

---






