import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Message } from 'discord.js';
import { registerMessageCommand, registerSlashCommand } from '../registerCommands';
import { getMeetingLink } from '../../utils';
import MessageCommand from '../MessageCommand';
import SlashCommand from '../SlashCommand';

async function dyteHandler(interaction: CommandInteraction | Message, ...args: string[]) {
    await interaction.reply((await getMeetingLink(args[0] || (interaction as CommandInteraction).options?.getString('meeting_name'))).url);
}

const slashDyte = new SlashCommand(
    new SlashCommandBuilder()
        .setName('dyte')
        .setDescription('Create a Dyte meeting.')
        .addStringOption((option) => option.setName('meeting_name')
            .setDescription('The name of the meeting to be created.')
            .setRequired(false)),
    dyteHandler,
    {
        allowedRoles: ['community'],
    },
);

registerSlashCommand(slashDyte);

registerMessageCommand(new MessageCommand(
    'dyte',
    dyteHandler,
));
