
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });
const music = require('@broken_bones/discord-music');
const events = music.event;

events.on('playSong', async (channel, songInfo, requester) => {



    channel.send({
        content: `Started playing the song [${songInfo.title}](${songInfo.url}) by \`${songInfo.author}\`.
        This was requested by ${requester.tag} (${requester.id})`
    });

});

events.on('addSong', async (channel, songInfo, requester) => {



    channel.send({
        content: `Added the song [${songInfo.title}](${songInfo.url}) by \`${songInfo.author}\` to the queue.
        Added by ${requester.tag} (${requester.id})`
    });

});

events.on('playList', async (channel, playlist, songInfo, requester) => {



    channel.send({
        content: `Started playing the song [${songInfo.title}](${songInfo.url}) by \`${songInfo.author}\` of the playlist ${playlist.title}.
        This was requested by ${requester.tag} (${requester.id})`
    });

});

events.on('addList', async (channel, playlist, requester) => {



    channel.send({
        content: `Added the playlist [${playlist.title}](${playlist.url}) with ${playlist.videos.length} amount of videos to the queue.
        Added by ${requester.tag} (${requester.id})`
    });

});

events.on('finish', async (channel) => {

    channel.send({
        content: 'Party has been ended!'
    });

});


client.login('Your bots token');
