
const { Client, Intents } = require('discord.js');
const music = require('@broken_bones/discord-music');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });

client.on('interactionCreate', async (interaction) => {
    if(interaction.isCommand()) {
        if(interaction.commandName === 'removequeue') {

            /*
             * Must be vaild queue number
            */

            const number = interaction.options.getInteger('number');

            music.removeQueue({
                interaction: interaction,
                number: number 
            });

        };
    };
});
client.login('Your bots token');
