export type CommandHandler = (...args: any[]) => any;

export interface CommandOptions {
    allowedRoles?: string[];
}

export default class Command {
    name: string;

    type: 'SlashCommand' | 'MessageCommand';

    handler: CommandHandler;

    options?: CommandOptions;

    constructor(name: string, handler: CommandHandler, options?: CommandOptions) {
        this.name = name;
        this.handler = handler;
        this.options = options || {};
    }
}
