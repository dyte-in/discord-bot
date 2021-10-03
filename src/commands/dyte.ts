import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Message } from 'discord.js';
import { getMeetingLink } from '../utils';
import Command from './command';

export default new Command(
    new SlashCommandBuilder()
        .setName('dyte')
        .setDescription('Create a Dyte meeting!')
        .addStringOption((option) => option.setName('meeting_name')
            .setDescription('The name of the meeting to be created')
            .setRequired(false)),
    async (interaction: CommandInteraction | Message, ...args: string[]) => {
        await interaction.reply((await getMeetingLink(args[0] || (interaction as CommandInteraction).options?.getString('meeting_name'))).url);
    },
    {
        isSlashCommand: true,
    },
);
