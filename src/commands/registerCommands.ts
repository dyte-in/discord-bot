import { Collection } from 'discord.js';
import SlashCommand from './SlashCommand';
import MessageCommand from './MessageCommand';
import { logger } from '../utils';

export const slashCommands = new Collection<string, SlashCommand>();
export const messageCommands = new Collection<string, MessageCommand>();

export function registerSlashCommand(slashCommand: SlashCommand) {
    slashCommands.set(slashCommand.name, slashCommand);
    logger.info(`Registered slash command ${slashCommand.name}`);
}

export function registerMessageCommand(messageCommand: MessageCommand) {
    messageCommands.set(messageCommand.name, messageCommand);
    logger.info(`Registered message command ${messageCommand.name}`);
}
