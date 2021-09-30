import { Collection } from 'discord.js';
import Command from './command';

import Ping from './ping';

export const commands = new Collection<string, Command>();

commands.set(Ping.command.name, Ping);

export const commandsJson = Array.from(commands.values()).map(
    (command) => command.command.toJSON(),
);
