import { Interaction } from 'discord.js';
import commands from '../commands';
import { logger } from '../utils';

export default async function interactionCreate(interaction: Interaction) {
    if (!interaction.isCommand()) return;

    const command = commands.get(interaction.commandName);

    if (!command) return;

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
