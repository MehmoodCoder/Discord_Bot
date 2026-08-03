import { REST, Routes } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const command1 = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_BOT_TOKEN,
);

(async () => {
  try {
    console.log("Started refreshing application (/) commmands.");
    await rest.put(
      Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),
      { body: command1 }
    );
    console.log("Succesfully reloaded");
  } catch (e) {
    console.error(e);
  }
})();


// Create Short URL


const command2 = [
  {
    name: "url",
    description: "Send url that you send me for just fun & testing",
  },
];

(async () => {
  try {
    console.log("Started refreshing application (/) commmands.");
    await rest.put(
      Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),
      { body: command2 }
    );
    console.log("Succesfully reloaded");
  } catch (e) {
    console.error(e);
  }
})();
