import dotenv from 'dotenv';

dotenv.config();

const {
    DISCORD_TOKEN: TOKEN = '',
    PREFIX = '',
    DEV_GUILD_ID = '',
    DEV_CLIENT_ID = '',
    DYTE_ORGANIZATION_ID = '',
    DYTE_API_KEY = '',
    DYTE_BASE_URL = '',
    DYTE_CLIENT_URL = '',
    RULES_AND_GUIDELINES_CHANNEL_ID = '',
    ANNOUNCEMENTS_CHANNEL_ID = '',
    BOT_TEST_CHANNEL_ID = '',
} = process.env;

const config = {
    TOKEN,
    PREFIX,
    DEV_GUILD_ID,
    DEV_CLIENT_ID,
    DYTE_ORGANIZATION_ID,
    DYTE_API_KEY,
    DYTE_BASE_URL,
    DYTE_CLIENT_URL,
    RULES_AND_GUIDELINES_CHANNEL_ID,
    ANNOUNCEMENTS_CHANNEL_ID,
    BOT_TEST_CHANNEL_ID,
};

export default config;
