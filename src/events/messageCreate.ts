import { Message } from 'discord.js';
import commands from '../commands';
import { config, logger } from '../utils';

export default async function meetingCreate(message: Message) {
    if (!message.content.startsWith(config.PREFIX)) return;

    const tokens = message.content.trim().split(/ +/g);
    const cmd = tokens[0].slice(config.PREFIX.length).toLowerCase();
    const args = tokens.slice(1);

    const command = commands.get(cmd);

    if (!command) {
        await message.reply({
            content: `Unknown command "${cmd}"`,
        });
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
