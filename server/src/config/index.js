/**
 * config.js
 *
 * Maintained by K Sai Charan
 *
 * @file config.js
 * @author K Sai Charan
 */

import * as winston from 'winston';

const levels = {
    error: 0,
    warn: 1,
    info: 2,
};

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'cyan',
};

const systemLogger = winston.createLogger({
    levels,
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            level: 'info',
        }),
        new winston.transports.Console({
            level: 'warn',
        }),
        new winston.transports.Console({
            level: 'error',
        }),
    ],
});

winston.addColors(colors);

export { systemLogger };
