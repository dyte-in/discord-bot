import dotenv from 'dotenv';

dotenv.config();

const config = {
    TOKEN: process.env.DISCORD_TOKEN,
    PREFIX: process.env.PREFIX,
    DEV_GUILD_ID: process.env.DEV_GUILD_ID,
    DEV_CLIENT_ID: process.env.DEV_CLIENT_ID,
};

export default config;
