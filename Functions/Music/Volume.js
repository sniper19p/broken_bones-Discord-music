
const { Client, Intents } = require('discord.js');
const music = require('@broken_bones/discord-music');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });

client.on('interactionCreate', async (interaction) => {
    if(interaction.isCommand()) {
        if(interaction.commandName === 'volume') {
            
            /*
             * Can't be higher than 100
            */
            
            const volume = interaction.options.getInteger('volume');
            
            music.volume({
                interaction: interaction,
                volume: volume
            });
        };
    };
});


client.login('Your bots token');
