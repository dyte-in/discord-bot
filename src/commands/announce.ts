import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Message } from 'discord.js';
import { config } from '../utils';
import Command from './command';

export default new Command(
    new SlashCommandBuilder()
        .setName('announce')
        .setDescription('Make an announcement on #announcements.'),
    async (interaction: CommandInteraction | Message) => {
        const channel = await interaction.guild?.channels.fetch(config.BOT_TEST_CHANNEL_ID);
        if (channel?.type === 'GUILD_TEXT') {
            await channel?.send('This is an announcement!');
        }
    },
    {
        allowedRoles: ['moderator', 'announcer'],
    },
);
