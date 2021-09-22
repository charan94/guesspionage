import { Router } from 'express';
import userService from '../service/user.service'
import { generateResponse } from '../utils';
import { systemLogger } from '../config/logger';

const router = Router();

router.get('/info/:userId', async (request, response, next) => {
    try {
        const userId = request.params.userId;
        const user = await userService.findUser(userId);
        return response.status(200).send(generateResponse(200, user))
    } catch (err) {
        systemLogger.error(err);
        next(err);
    }
});

router.get('/check/:userName', async (request, response, next) => {
    try {
        const userName = request.params.userName;
        const result = await userService.checkUserName(userName);
        return response.status(200).send(generateResponse(200, result));
    } catch (err) {
        systemLogger.error(err);
        next(err);
    }
});


router.post('/update/:userId', async (request, response, next) => {
    try {
        const userId = request.params.userId;
        const body = request.body;
        const updatedUser = await userService.updateUser(userId, body);
        return response.status(200).send(generateResponse(200, updatedUser));
    } catch (err) {
        systemLogger.error(err);
        next(err);
    }
});


router.post('/create', async (request, response, next) => {
    try {
        const body = request.body;
        const user = await userService.createUser(body);
        return response.status(200).send(generateResponse(200, user))
    } catch (err) {
        systemLogger.error(err);
        next(err);
    }
});

router.get('/stats/:userId', async (request, response, next) => {
    try {
        const userId = request.params.userId;
        const user = await userService.findUserStats(userId);
        return response.status(200).send(generateResponse(200, user));
    } catch (err) {
        systemLogger.error(err);
        next(err);
    }
});

export default router;