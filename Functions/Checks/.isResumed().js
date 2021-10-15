
const { Client, Intents } = require('discord.js');
const music = require('@koenie06/discord.js-music');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });


client.on('interactionCreate', async (interaction) => {
    if(interaction.isCommand()) {
        if(interaction.commandName === 'isresumed') {

            /*
              'true' means that the playing song is still playing.
             'false' means that the song is paused.
            */

            const isResumed = await music.isResumed({ interaction: interaction });
    
            interaction.reply({ content: isResumed === true ? 'Ofcourse i am still playing music!' : 'Sadly enough.. I got paused.' });

        };
    };
});


client.login('Token of your bot');
