const { Client, Intents } = require('discord.js');
const music = require('@broken_bones/discord-music');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });


client.on('interactionCreate', async (interaction) => {
    if(interaction.isCommand()) {
        if(interaction.commandName === 'isconnected') {


            const isConnected = await music.isConnected({ interaction: interaction });
         /*
              'true' means that it is connected to a VoiceChannel.
              'false' means that it isn't connected to any VoiceChannel.
            */
            interaction.reply({ content: isConnected === true ? 'I am connected!' : 'Welp.. I am not connected to any channel here.' });

        };
    };
});


client.login('Token of your bot');
