import config from './config';
import Requests from './request';

const requests = new Requests();

export default async function getMeetingLink(title?: string) {
    const { res } = await requests.post(`${config.DYTE_BASE_URL}/v1/organizations/${config.DYTE_ORGANIZATION_ID}/meeting`, {
        title: title || 'Meeting',
    },
    {
        headers: {
            Authorization: `APIKEY ${config.DYTE_API_KEY}`,
        },
    });

    const { roomName } = res.data.data.meeting;

    return {
        url: `${config.DYTE_CLIENT_URL}/${roomName}`,
    };
}
