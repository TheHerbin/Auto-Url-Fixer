require('dotenv').config();
const {Client,IntentsBitField, userMention} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})
client.on('ready',(c)=>{
    console.log(`The bot named ${c.user.tag} is now ready.`)
})

client.on('messageCreate',(message) => {
    if(message.author.bot){
        return
    }

    /*if(message.content === "test"){

        message.reply("Voici un test bien réussi !")
    }*/

    const xString = "https://x.com";
    const vxTwitterString = "https://vxtwitter.com";
    let fixedTwitterString = "";
    if(message.content.includes(xString)){
        fixedTwitterString = message.content.replace(xString, vxTwitterString);
        const channel = message.channelId
        message.delete(1000);
        message.channel.send(userMention(message.author.id)+", "+"I corrected your link so it can be embedded : "+fixedTwitterString)
        
    }

})
client.login(process.env.TOKEN)