import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { commandsJson } from './commands';
import config from './utils/config';
import logger from './utils/logger';

const rest = new REST({ version: '9' }).setToken(config.TOKEN);

rest.put(
    Routes.applicationGuildCommands(config.DEV_CLIENT_ID, config.DEV_GUILD_ID),
    { body: commandsJson },
).then(() => logger.info('Successfully registered application commands.'))
    .catch(logger.error);
