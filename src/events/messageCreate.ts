import { Message } from 'discord.js';
import { messageCommands } from '../commands/registerCommands';
import { config, logger } from '../utils';

export default async function messageCreate(message: Message) {
    if (!message.content.startsWith(config.PREFIX)) return;

    const tokens = message.content.trim().split(/ +/g);
    const cmd = tokens[0].slice(config.PREFIX.length).toLowerCase();
    const args = tokens.slice(1);

    const command = messageCommands.get(cmd);

    if (!command) return;

    const { allowedRoles } = command.options;

    if (
        allowedRoles?.length
        && !message.member.roles.cache
            .some(({ name }) => command.options.allowedRoles.includes(name))
    ) {
        await message.reply(`To run this command, you need to have at least one of the following roles: ${allowedRoles.map((role) => `\`${role}\``).join(', ')}`);

        return;
    }

    try {
        command.handler(message, ...args);
    } catch (error) {
        logger.error(error);
        await message.reply({
            content: 'There was an error while executing this command!',
        });
    }
}
