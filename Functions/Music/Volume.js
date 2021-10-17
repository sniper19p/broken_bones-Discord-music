
const { Client, Intents } = require('discord.js');
const music = require('@broken_bones/discord-music');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });
