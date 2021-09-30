import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import commands from './commands';
import config from './utils/config';
import logger from './utils/logger';

const rest = new REST({ version: '9' }).setToken(config.TOKEN);

const slashCommands = commands.filter(
    (cmd) => cmd.options.isSlashCommand,
).map((cmd) => cmd.command.toJSON());

async function main() {
    await rest.put(
        Routes.applicationGuildCommands(config.DEV_CLIENT_ID, config.DEV_GUILD_ID),
        { body: slashCommands },
    );

    logger.info('Registered Guild Command for Dyte Discord server');

    await rest.put(
        Routes.applicationCommands(config.DEV_CLIENT_ID),
        { body: slashCommands },
    );
    logger.info('Registered Global Commands!');
}

main();
