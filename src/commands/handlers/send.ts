import { Message } from 'discord.js';
import { registerMessageCommand } from '../registerCommands';
import MessageCommand from '../MessageCommand';

async function sendHandler(message: Message, channelId: string, ...content: string[]) {
    let channel;
    try {
        const cid = channelId.replace(/<*#*>*/ig, '');
        channel = await message.guild?.channels.fetch(cid);

        if (!channel.type) {
            throw new Error('Invalid channel.');
        }
    } catch (err) {
        await message.reply('Channel not found, pass a valid channel ID or used the #<channel-name> format.');
        return;
    }

    if (
        !channel
        || channel.type === 'GUILD_VOICE'
        || channel.type === 'GUILD_CATEGORY'
        || channel.type === 'GUILD_STORE'
        || channel.type === 'GUILD_STAGE_VOICE'
    ) {
        return;
    }

    await channel?.send(content.join(' '));
}

registerMessageCommand(new MessageCommand(
    'send',
    sendHandler,
    {
        allowedRoles: ['moderator', 'announcer'],
    },
));
