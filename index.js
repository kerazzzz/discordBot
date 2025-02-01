
const { REST, Routes, Client, Events, GatewayIntentBits } = require('discord.js');

const JOKE = require('give-me-a-joke');

const {projectTitle, deadline, myUname} = require("./privateinfo.js");


require('dotenv').config();

const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID; 


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Defined / commands
const commands = [
    
    {
        name: 'info',                                               //not: /info
        description: 'Project information',
    },
    {
        name: 'joke',
        description: 'tells a joke',    
    },
    {
        name: 'bye',                                               //not: /info
        description: 'Bye! Bye!',
    }
];

// Register slash commands
const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        // Use this for global commands (takes up to an hour to propagate)
        await rest.put(Routes.applicationCommands(clientId), { body: commands });

        // Use this for guild-specific commands (instant updates)
        await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();


   
//days remainign code

const today = new Date();

const Predeadline = new Date("2025-2-15");
const Finaldeadline = new Date("2025-4-11");


console.log(today)
const DayzRemainningPredefense=Math.round((Predeadline-today)/(60*24*60*1000))
const DayzRemainningFinalDfense=Math.round((Finaldeadline-today)/(60*24*60*1000))







// Handle slash command interactions
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'info') {                                  //not /info
        await interaction.reply(`
            📕Project Name: Smart Virtual Interface
            👨🏼‍💻 Work Completed: 30% (max)
            🗓️ Days remaining until Predefense: ${DayzRemainningPredefense};
            🗓️ Days remaining until Finaldefense: ${DayzRemainningFinalDfense};

            `);
    }else if (commandName === 'bye') {                                  //not /info
        await interaction.reply(`
            BYE! BYE!   🤡

            `);
            flags = 0;
    }
    else if (commandName === 'joke') {
        try {
            const joke = await new Promise((resolve, reject) => {
                JOKE.getRandomDadJoke((joke) => {
                    if (joke) {
                        resolve(joke);
                    } else {
                        reject(new Error('Failed to fetch a joke'));
                    }
                });
            });
            await interaction.reply(joke);
        } catch (error) {
            await interaction.reply('Sorry, I couldn\'t fetch a joke at the moment.');
        }
    }
});


// Handle regular messages(messages' content) 



//greets me. 
let flags = 0;
client.on('messageCreate', (message) => {
    if (message.author.username === myUname && flags===0){
        message.react('🫡');
            message.reply('Hello, sir. Welcome to Discord sir! 🙇🏼 \n Your presence enlighten us sir!');
            flags = 1;
        return;
    }});





client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase().includes('project')) {
        // console.log(message);
        // return;
        message.reply('Let’s COMPLETE💥 our project, guys!');
        return;
    }

    if (message.content.toLowerCase().includes('sakiyo') || message.content.toLowerCase().includes('completed')) {
        message.react('👍');
        return;
    }

    if (message.content.toLowerCase().includes('hello') || message.content.toLowerCase().includes('hi') || message.content.toLowerCase().includes('k xa')) {
        message.reply(`Hello ${message.author.username}! 🤡 Complete your part of the project.`);
        return;
    }
});

// Log in the bot
client.login(token);