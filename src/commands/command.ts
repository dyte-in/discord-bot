import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Message } from 'discord.js';

interface CommandOptions {
    isSlashCommand?: boolean;
    allowedRoles?: string[];
}

const commandDefaults: CommandOptions = {
    isSlashCommand: false,
};

type CommandHandler = (interaction: CommandInteraction | Message, ...args: string[]) => void;
export default class Command {
    command: SlashCommandBuilder | Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;

    options: CommandOptions;

    handler: CommandHandler;

    constructor(
        command: SlashCommandBuilder | Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>,
        handler: CommandHandler,
        options: CommandOptions = {
        },
    ) {
        this.command = command;
        this.handler = handler;
        this.options = {
            ...commandDefaults,
            ...options,
        };
    }
}
