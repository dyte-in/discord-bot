import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Message } from 'discord.js';
import Command from './command';

export default new Command(
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check if the bot is up!'),
    async (interaction: CommandInteraction | Message) => {
        await interaction.reply('Pong!');
    },
);
