import { Collection } from 'discord.js';
import Command from './command';
import dyte from './dyte';

import Ping from './ping';

const commands = new Collection<string, Command>();

commands.set(Ping.command.name, Ping);
commands.set(dyte.command.name, dyte);

export default commands;
