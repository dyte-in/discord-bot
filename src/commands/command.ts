import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Message } from 'discord.js';

interface CommandOptions {
    isSlashCommand?: boolean;
}

const commandDefaults: CommandOptions = {
    isSlashCommand: false,
};

type CommandHandler = (interaction: CommandInteraction | Message, ...args: string[]) => void;
export default class Command {
    command: SlashCommandBuilder;

    options: CommandOptions;

    handler: CommandHandler;

    constructor(
        command: SlashCommandBuilder,
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
