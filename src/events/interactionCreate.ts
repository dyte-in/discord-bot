import { GuildMemberRoleManager, Interaction } from 'discord.js';
import { slashCommands } from '../commands/registerCommands';
import { logger } from '../utils';

export default async function interactionCreate(interaction: Interaction) {
    if (!interaction.isCommand()) return;

    const command = slashCommands.get(interaction.commandName);

    if (!command) return;

    const { allowedRoles } = command.options;
    const memberRoles = interaction.member.roles as GuildMemberRoleManager;

    if (
        allowedRoles?.length
        && !memberRoles.cache
            .some(({ name }) => command.options.allowedRoles.includes(name))
    ) {
        await interaction.reply(`To run this command, you need to have at least one of the following roles: ${allowedRoles.map((role) => `\`${role}\``).join(', ')}`);

        return;
    }

    try {
        command.handler(interaction);
    } catch (error) {
        logger.error(error);
        await interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true,
        });
    }
}
