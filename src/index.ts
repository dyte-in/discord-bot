// Require the necessary discord.js classes
import { Client, Intents, MessageEmbed } from 'discord.js';
import commands from './commands';
import config from './utils/config';

import logger from './utils/logger';

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.DIRECT_MESSAGES,
    ],
    partials: ['CHANNEL'],
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.handler(interaction);
    } catch (error) {
        logger.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(config.PREFIX)) return;

    const tokens = message.content.trim().split(/ +/g);
    const cmd = tokens[0].slice(config.PREFIX.length).toLowerCase();
    const args = tokens.slice(1);

    const command = commands.get(cmd);

    if (!command) {
        await message.reply({ content: `Unknown command "${cmd}"` });
        return;
    }

    try {
        await command.handler(message, ...args);
    } catch (error) {
        logger.error(error);
        await message.reply({ content: 'There was an error while executing this command!' });
    }
});

client.on('guildMemberAdd', async (member) => {
    const embed = new MessageEmbed()
        .setColor('#2160FD')
        .setTitle(":wave: Welcome to Dyte's Community Discord Server!")
        .setURL('https://dyte.io')
        .setAuthor('dyte', 'https://avatars.githubusercontent.com/u/68553451?s=200&v=4', 'https://dyte.io')
        .setDescription(`
:zap: [Dyte](https://dyte.io) provides easy to integrate developer friendly **real-time audio/video SDKs** that enable you to add completely branded and customizable live video calls to your platform.

:rocket: Post integrating Dyte, you can supercharge the experience with **Dyte Plugins**! Plugins allow you to have an immersive, collaborative and interactive experience right within the call.

:woman_technologist: This community has been launched to unite passionate developers from around the globe and foster a culture of building Dyte together with our users. We envision this as a forum to:

• Exchange ideas on all things live video.
• Explore our SDKs as well as build cool new products/plugins on Dyte and share them with us!
• Ideate on feature requests (we would like to hear more from you!) and provide product updates from our team as we continue improving your Dyte experience.
• Provide technical support for anything related to Dyte in particular and live video in general.
• Share hackathons, webinars and other event updates for everyone to attend.
━━━━━━━━━━━━━━━━━
`)
        .addFields([
            { name: ':mag: To know more about Dyte, visit us at:', value: 'https://dyte.io' },
            { name: ':hammer: Start building on Dyte by creating an account on:', value: 'https://dev.dyte.in' },
            { name: ':book: Access our documentation:', value: 'https://docs.dyte.in' },

        ])
        .setThumbnail('https://avatars.githubusercontent.com/u/68553451?s=200&v=4');
    await member.send({ embeds: [embed] });
    await member.send(`:exclamation: **IMPORTANT**:
Make sure to read the guidelines on ${client.channels.cache.get(config.RULES_AND_GUIDELINES_CHANNEL_ID)}, and react to the message to get your community role!`);
});

client.once('ready', () => {
    logger.info('Bot Ready');
    client.user.setActivity('/dyte to create a meeting', { type: 'PLAYING' });
});

client.login(config.TOKEN);
