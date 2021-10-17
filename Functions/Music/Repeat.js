
const { Client, Intents } = require('discord.js');
const music = require('@broken_bones/discord-music');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });

client.on('interactionCreate', async (interaction) => {
    if(interaction.isCommand()) {
        if(interaction.commandName === 'repeat') {

            /* 
             * Use 'true' to set the song on repeat.
             * Use 'false' to turn the song off repeat mode.
            */

            const OnOrOff = interaction.options.getBoolean('onoff');

            music.repeat({
                interaction: interaction,
                value: onOrOff
            });
            
        };
    };
});


client.login('Your bots token');
