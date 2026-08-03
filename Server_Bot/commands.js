import { REST, Routes } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "url",
    description: "Send url that you send me for just fun & testing",
    options: [
      {
        name: "url",
        description: "Enter your URL",
        type: 3, // 3 = STRING
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_BOT_TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(
      Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),
      { body: commands }
    );
    console.log("Successfully reloaded all application (/) commands.");
  } catch (e) {
    console.error(e);
  }
})();