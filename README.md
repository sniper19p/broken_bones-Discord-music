Hello and welcome to my package as of right now i am still working on it.

Before you install, you will need..

- Node.js

- Discord.js v13+

What this package does

This package will make it easier to use the new discord.js v13 music.

🔎 Functions

Here are the functions you can use! 
Please read them carefully!

Music
-----------------------------------------------------------------------

.play() - Plays the given music in the given channel.

.stop() - Stops the music whenever it is playing.

.skip() - Skips the current playing song.

.pause() - Pauses the current playing song.

.resume() - Resumes the playing song whenever it is paused.

.repeat() - Repeats the playing song forever, until it is turned off.

.volume() - Changes the music volume.

.jump() - Jumps to a the given queue number song.

.getQueue() - Returns a Array of queued songs.

.removeQueue() - Removes the given queue song number from the queue.

Checks
----------------------------------------------------------------------------------------

.isConnected() - Checks whenever the bot is connected to a VC.

.isPaused() - Checks whenever the playing song is paused.

.isResumed() - Checks whenever the bot is playing a song.

.isRepeated() - Checks whenever the playing song is on repeat.


Events
----------------------------------------------------------------------------------------

playSong - Runs whenever a new song started playing.

addSong - Runs whenever a song has been added to the queue.

playList - Runs whenever a new song of a playlist started playing.

addList - Runs whenever a playlist has been added to the queue.

finish - Runs whenever all the queued songs are played.


