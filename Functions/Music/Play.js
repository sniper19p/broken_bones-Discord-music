
const { Client, Intents } = require('discord.js');
const music = require('@broken_bones/discord-music');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });

client.on('interactionCreate', async (interaction) => {
    if(interaction.isCommand()) {
        if(interaction.commandName === 'play') {

           const channel = interaction.member.voice.channel;
           const song = interaction.options.getString('song');

           music.play({
               interaction: interaction,
               channel: channel,
               song: song
           });
        };
    };
});
client.login('Your bots token');
