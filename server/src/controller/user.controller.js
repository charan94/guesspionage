import { Router } from 'express';
import userService from '../service/user.service'
import { generateResponse } from '../utils';
import { systemLogger } from '../config/logger';
import { userValidator } from '../validators/user.validator';
import { validateRequest } from '../middlewares/validation.middleware';
import { matchedData } from 'express-validator';

const router = Router();

router.get(
    '/info/:userId',
    userValidator.getUserInfo,
    [validateRequest],
    async (request, response, next) => {
        try {
            const params = matchedData(request, { locations: ['params'] });
            const userId = params.userId;
            const user = await userService.findUser(userId);
            return response.status(200).send(generateResponse(200, user))
        } catch (err) {
            systemLogger.error(err);
            next(err);
        }
    });

router.get(
    '/check/:userName',
    userValidator.checkUserName,
    [validateRequest],
    async (request, response, next) => {
        try {
            const params = matchedData(request, { locations: ['params'] });
            const userName = params.userName;
            const result = await userService.checkUserName(userName);
            return response.status(200).send(generateResponse(200, result));
        } catch (err) {
            systemLogger.error(err);
            next(err);
        }
    });


router.post(
    '/update/:userId',
    userValidator.updateUser,
    [validateRequest],
    async (request, response, next) => {
        try {
            const params = matchedData(request, { locations: ['params'] });
            const body = matchedData(request, { locations: ['body'] });
            const userId = params.userId;
            const updatedUser = await userService.updateUser(userId, body);
            return response.status(200).send(generateResponse(200, updatedUser));
        } catch (err) {
            systemLogger.error(err);
            next(err);
        }
    });


router.post('/create',
    userValidator.createUser,
    [validateRequest],
    async (request, response, next) => {
        try {
            const body = matchedData(request, { locations: ['body'] });
            const user = await userService.createUser(body);
            return response.status(200).send(generateResponse(200, user))
        } catch (err) {
            systemLogger.error(err);
            next(err);
        }
    });

router.get(
    '/stats/:userId',
    userValidator.getUserStats,
    [validateRequest],
    async (request, response, next) => {
        try {
            const params = matchedData(request, { locations: ['params'] });
            const userId = params.userId;
            const user = await userService.findUserStats(userId);
            return response.status(200).send(generateResponse(200, user));
        } catch (err) {
            systemLogger.error(err);
            next(err);
        }
    });

export default router;