import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Message } from 'discord.js';
import { registerMessageCommand, registerSlashCommand } from '../registerCommands';
import MessageCommand from '../MessageCommand';
import SlashCommand from '../SlashCommand';

async function pingHandler(interaction: CommandInteraction | Message) {
    await interaction.reply('Pong!');
}

registerMessageCommand(new MessageCommand(
    'ping',
    pingHandler,
));

registerSlashCommand(new SlashCommand(
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check if the bot is up!'),
    pingHandler,
));
