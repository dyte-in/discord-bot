import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Message } from 'discord.js';

export default class Command {
    command: SlashCommandBuilder;

    handler: (interaction: CommandInteraction | Message, ...args: string[]) => void;

    constructor(
        command: SlashCommandBuilder,
        handler: (interaction: CommandInteraction | Message) => void,
    ) {
        this.command = command;
        this.handler = handler;
    }
}
