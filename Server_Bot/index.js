import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intencts: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});


client.on('messageCreate', message => {
    console.log(message.content)
})

client.login('MY_KEY')
