import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import Command, { CommandOptions } from './Command';

type SlashCommandHandler = (interaction: CommandInteraction, ...string: string[]) => any;

export default class SlashCommand extends Command {
    command: SlashCommandBuilder | Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;

    constructor(
        command: SlashCommandBuilder | Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>,
        handler: SlashCommandHandler,
        options?: CommandOptions,
    ) {
        super(command.name, handler, options);
        this.command = command;
        this.type = 'SlashCommand';
    }
}
