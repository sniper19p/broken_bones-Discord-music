
const { Client, Intents } = require('discord.js');
const music = require('@broken_bones/discord-music');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });


client.on('interactionCreate', async (interaction) => {
    if(interaction.isCommand()) {
        if(interaction.commandName === 'ispaused') {

            /*
              'true' means that the playing song is paused.
              'false' means that the playing song is still playing.
            */

            const isPaused = await music.isPaused({ interaction: interaction });
    
            interaction.reply({ content: isPaused === true ? 'I am waiting for you to resume..' : 'Yes yes, i am still playing music!' });

        };
    };
});

client.login('Token of your bot');
