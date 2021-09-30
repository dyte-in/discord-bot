import { Collection } from 'discord.js';
import Command from './command';

import Ping from './ping';

const commands = new Collection<string, Command>();

commands.set(Ping.command.name, Ping);

export default commands;
