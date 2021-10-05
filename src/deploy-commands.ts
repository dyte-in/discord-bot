import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { slashCommands as commands } from './commands';
import { config, logger } from './utils';

const rest = new REST({ version: '9' }).setToken(config.TOKEN);

const slashCommands = commands.map((cmd) => cmd.command.toJSON());

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
