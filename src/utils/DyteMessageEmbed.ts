import { MessageEmbed, MessageEmbedOptions } from 'discord.js';
import {
    developerPortalURL,
    documentationURL,
    embedAuthor,
    embedColor,
    embedThumbnail,
    websiteURL,
} from '.';

export default class DyteMessageEmbed extends MessageEmbed {
    constructor(data?: MessageEmbed | MessageEmbedOptions) {
        super(data);
        this.setURL(websiteURL)
            .setColor(embedColor)
            .setAuthor(embedAuthor.name, embedAuthor.iconURL, embedAuthor.url)
            .setThumbnail(embedThumbnail)
            .addFields([
                { name: ':mag: To know more about Dyte, visit us at:', value: websiteURL },
                { name: ':hammer: Start building on Dyte by creating an account on:', value: developerPortalURL },
                { name: ':book: Access our documentation:', value: documentationURL },

            ]);
    }
}
