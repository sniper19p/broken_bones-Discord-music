
const { Client, Intents } = require('discord.js');
const music = require('@koenie06/discord.js-music');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });


client.on('interactionCreate', async (interaction) => {
    if(interaction.isCommand()) {
        if(interaction.commandName === 'isrepeated') {

            /*
             * 'true' means that the playing song is on repeat.
             * 'false' means that the queue is just playing normally.
            */

            const isRepeated = await music.isRepeated({ interaction: interaction });
    
            interaction.reply({ content: isRepeated === true ? 'This song is in a infinite loop!' : 'Just playing the queue normally.' });

        };
    };
});

client.login('Token of your bot');
