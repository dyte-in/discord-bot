// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import commands from './commands';
import config from './utils/config';

import logger from './utils/logger';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.handler(interaction);
    } catch (error) {
        logger.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(config.PREFIX)) return;

    const tokens = message.content.trim().split(/ +/g);
    const cmd = tokens[0].slice(config.PREFIX.length).toLowerCase();
    const args = tokens.slice(1);

    const command = commands.get(cmd);

    if (!command) {
        await message.reply({ content: `Unknown command "${cmd}"` });
        return;
    }

    try {
        await command.handler(message, ...args);
    } catch (error) {
        logger.error(error);
        await message.reply({ content: 'There was an error while executing this command!' });
    }
});

client.once('ready', () => {
    logger.info('Bot Ready');
});

client.login(config.TOKEN);
