import { Client, GuildMember } from 'discord.js';
import { config, DyteMessageEmbed } from '../utils';

export default async function guildMemberAdd(client: Client, member: GuildMember) {
    const embed = new DyteMessageEmbed()
        .setTitle(":wave: Welcome to Dyte's Community Discord Server!")
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
    `);

    await member.send({ embeds: [embed] });
    await member.send(`:exclamation: **IMPORTANT**:
    Make sure to read the guidelines on ${client.channels.cache.get(config.RULES_AND_GUIDELINES_CHANNEL_ID)}, and react to the message to get your community role!`);
}
