import axios, {
    AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse,
} from 'axios';
import PQueue from 'p-queue/dist';
import logger from './logger';

interface RequestsOptions {
    timeout?: number;
    maxSimultaneousRequests?: number;
}

export default class Requests {
    private requests: AxiosInstance;

    private queue: PQueue;

    constructor(options?: RequestsOptions) {
        const {
            timeout = 3000,
            maxSimultaneousRequests = 5,
        } = options || {};

        this.requests = axios.create({
            timeout,
        });

        this.queue = new PQueue({
            concurrency: maxSimultaneousRequests,
        });
    }

    get pending() {
        return this.queue.pending;
    }

    get total() {
        return this.queue.size;
    }

    /**
     * Error handler function to await an axios request, and return
     * the status code of the response.
     * @param p A promise for an axios response
     * @returns The status code from the axios response
     */
    private static async errorHandler(p: Promise<AxiosResponse<any>>) {
        const time = new Date();
        try {
            const res = await p;
            return {
                res,
                time,
                statusCode: res.status,
            };
        } catch (err) {
            const error: AxiosError = err;
            if (error.response) {
                const { data, status, headers } = error.response;
                logger.error({ data, status, headers });
            } else if (error.config) {
                const { url, method, data } = error.config;
                logger.error({ url, method, data });
            } else {
                logger.error({ message: error.message });
            }
            return {
                time,
                statusCode: error?.response.status,
            };
        }
    }

    /**
     * Queue-based wrapper around axios get request
     * @param url URL to send the request to
     * @param config Axios config for the request
     */
    async get(url: string, config?: AxiosRequestConfig): Promise<{time: Date, statusCode: number}> {
        return this.queue.add(() => Requests.errorHandler(this.requests.get(url, config)));
    }

    /**
     * Queue-based wrapper around axios post request
     * @param url URL to send the request to
     * @param data Data to send in the post message body
     * @param config Axios config for the request
     */
    async post(url: string, data?: any, config?: AxiosRequestConfig) {
        return this.queue.add(() => Requests.errorHandler(this.requests.post(url, data, config)));
    }

    /**
     * Start or resume execution after pausing.
     * This is called implicitly by default.
     */
    start() {
        this.queue.start();
    }

    /**
     * Pause execution of requests.
     */
    pause() {
        this.queue.pause();
    }

    /**
     * Clear pending requests in the queue.
     */
    clear() {
        this.queue.clear();
    }
}
