import { Client, Intents } from 'discord.js';
import { guildMemberAdd, interactionCreate, messageCreate } from './events';
import { config, logger } from './utils';
import './commands';

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.DIRECT_MESSAGES,
    ],
    partials: ['CHANNEL'],
});

client.on('interactionCreate', interactionCreate);

client.on('messageCreate', messageCreate);

client.on('guildMemberAdd', (member) => guildMemberAdd(client, member));

client.once('ready', () => {
    logger.info('Bot Ready');
    client.user.setActivity('/dyte to create a meeting', { type: 'PLAYING' });
});

client.login(config.TOKEN);
