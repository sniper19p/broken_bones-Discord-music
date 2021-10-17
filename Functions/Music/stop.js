const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@broken_bones/discord-music');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });

client.on('interactionCreate', async (interaction) => {
    if(interaction.isCommand()) {
        if(interaction.commandName === 'stop') music.stop({ interaction: interaction });
    };
});

/* Log your client in with your token. */
client.login('Client token from https://discord.com/developers/applications');
