import { Client, GatewayIntentBits } from "discord.js";
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});


client.on('messageCreate', message => {

    if (message.author.bot) return;

    message.reply(`Hello ${message.author.username} from ${message.guild.name}!`)
    console.log(message.content)
})

client.on('interactionCreate', async interaction => {
  // console.log(interaction)
  await interaction.reply("Pong !")
}, 
)

client.login(process.env.DISCORD_BOT_TOKEN)
