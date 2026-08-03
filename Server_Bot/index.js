import { Client, GatewayIntentBits } from "discord.js";
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({
  intencts: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});


client.on('messageCreate', message => {
    console.log(message.content)
})

client.login(process.env.DISCORD_BOT_TOKEN)
