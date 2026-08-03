import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}! 🤖`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  message.reply(`Hello ${message.author.username} from ${message.guild.name}!`);
  console.log(message.content);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong !");
  } 
  
  else if (commandName === "url") {
    const userUrl = interaction.options.getString("url");
    console.log("Received URL:", userUrl);
    
    await interaction.reply(`Your URL is: ${userUrl}`);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);