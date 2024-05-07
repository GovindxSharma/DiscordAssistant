
import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();


// Create a new Discord client instance with intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        
    ]
});
client.on("ready", () => {
  console.log(`Bot is ready ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});
client.on("messageCreate",async msg => {
//   You can view the msg object here with console.log(msg)
  if (msg.content === "Hello") {
    msg.reply(`Hello ${msg.author.username}`);
      }
    if (msg.content === "ping") {
       msg.reply(`pong`);
    }
    console.log(msg.content)
});

// Log in to Discord with your bot token
client.login(process.env.TOKEN);
