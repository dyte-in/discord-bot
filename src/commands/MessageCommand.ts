import { Message } from 'discord.js';
import Command, { CommandOptions } from './Command';

type MessageCommandHandler = (message: Message, ...string: string[]) => any;

export default class MessageCommand extends Command {
    constructor(
        name: string,
        handler: MessageCommandHandler,
        options?: CommandOptions,
    ) {
        super(name, handler, options);
        this.type = 'MessageCommand';
    }
}
