const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));





const { Intents } = DiscordJS

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.DIRECT_MESSAGES
  ],
})




client.on('ready', () => {
    // The client object is required as the first argument.
    // The second argument is the options object.
    // All properties of this object are optional.
    	console.log(`Hi, ${client.user.username} is now online!`);

	client.user.setActivity('- help', { type: 'PLAYING' });

    const wok = new WOKCommands(client, {
     
        // The name of the local folder for your command files
        commandsDir: path.join(__dirname, 'commands'),
        
        // The name of the local folder for your feature files
        featuresDir: path.join(__dirname, 'features'),
        
        // The name of the local file for your message text and translations
        // Omitting this will use the built-in message path
        messagesPath: '',
        
        // Allow importing of .ts files
        typeScript: false,
        
        // If WOKCommands warning should be shown or not, default true
        showWarns: true,
        
        // How many seconds to keep error messages before deleting them
        // -1 means do not delete, defaults to -1
        delErrMsgCooldown: 10,
        
        // What language your bot should use
        // Must be supported in your messages.json file
        defaultLangauge: 'english',
        
        // If your commands should not be ran by a bot, default false
        ignoreBots: false,
        
        // If interactions should only be shown to the one user
        // Only used for when WOKCommands sends an interaction response
        // Default is true
        ephemeral: false,
        
        // Various options for your MongoDB database connection
        dbOptions: {
            // These 4 are the default options
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        },
        
        // What server/guild IDs are used for testing only commands & features
        // Can be a single string if there is only 1 ID
        testServers: ['ID1', 'ID2', 'ID3'],

        botOwners: ['257147010488991744'],
        
        // What built-in commands should be disabled.
        // Note that you can overwrite a command as well by using
        // the same name as the command file name.
        disabledDefaultCommands: [
            // 'help',
            // 'command',
            // 'language',
            // 'prefix',
            // 'requiredrole',
            // 'channelonly'
        ],
        
        // When connecting to a Mongo database.
        // For more infomration view the "DATABASES" section
        // of this documentation.
        mongoUri: "mongodb+srv://martin:MARTIN123martin@clox.yhwuy.mongodb.net/cloxbot?retryWrites=true&w=majority",
        
        // Provides additional debug logging
        debug: true
    })
     const { slashCommands } = wok
        // Here are some additional methods that you can chain
        // onto the contrustor call. These will eventually be
        // merged into the above object, but for now you can
        // use them:
        
        // The default is !
        .setDefaultPrefix('-')
        
        // Used for the color of embeds sent by WOKCommands
        .setColor(0xff0000)
        
        // User your own ID
        // If you only have 1 ID then you can pass in a string instead
        wok.on('databaseConnected', (connection, state) => {
    console.log(`The connection state is "${state}"`)
  })

})
 
client.login('MTA3MTY5NDQ1MDUwNzY2NTQ4OA.GmeAxU.WsBKFLT-_hxFNnFKhawBCTfAc69h4Ntl14CpUw');
