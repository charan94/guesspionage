import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './routes';
import errorMiddleware from './middlewares/error.middleware';
import { systemLogger } from './config/logger';

// handling exceptions.
process.on('uncaughtException', (err) => {
    systemLogger.error(`uncaughtException occurred: ${err}`);
})

process.on('unhandledRejection', (err) => {
    systemLogger.error(`unhandledRejection occurred: ${err}`);
});

config();

const app = express();

const corsOptions = {
    origin: process.env.FRONTEND_DOMAIN_NAME
        ? `${process.env.FRONTEND_DOMAIN_NAME}`
        : '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json({ limit: '50mb' }));

app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.disable('x-powered-by');

app.use('/api', router);

app.use(errorMiddleware);

const PORT = process.env.PORT || 8081;

const server = app.listen(PORT, () => {
    systemLogger.info({
        message: `Express server has started on port ${PORT}. Open http://localhost:${PORT}/ to see results`,
    });
});