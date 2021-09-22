import { Router } from 'express';
import { systemLogger } from '../config/logger';
import { GAME_SETTINGS, THRESHOLD } from '../constants';
import gameService from '../service/game.service';
import { generateResponse } from '../utils';
import { gameValidator } from '../validators/game.validator';
import { validateRequest } from '../middlewares/validation.middleware';

const router = Router();

router.get(
    '/settings',
    async (request, response, next) => {
        return response.status(200).send(generateResponse(200, { settings: GAME_SETTINGS, threshold: THRESHOLD }));
    });


router.get(
    '/info/:gameId',
    gameValidator.gameInfo,
    [validateRequest],
    async (request, response, next) => {
        try {
            const params = matchedData(request, { locations: ['params'] });
            const gameId = params.gameId;
            const game = await gameService.findGame(gameId);
            return response.status(200).send(generateResponse(200, game))
        } catch (err) {
            systemLogger.error(err);
            next(err);
        }
    });

router.post(
    '/create/:userId',
    gameValidator.createGame,
    [validateRequest],
    async (request, response, next) => {
        try {
            const params = matchedData(request, { locations: ['params'] });
            const userId = params.userId;
            const game = await gameService.createNewGame(userId);
            return response.status(200).send(generateResponse(200, game))
        } catch (err) {
            systemLogger.error(err);
            next(err);
        }
    });


router.post(
    '/update/:gameid',
    gameValidator.updateGame,
    [validateRequest],
    async (request, response, next) => {
        try {
            const params = matchedData(request, { locations: ['params'] });
            const gameId = params.gameId;
            const body = matchedData(request, { locations: ['body'] });
            const { status } = body;
            const game = await gameService.updateGame(gameId, status);
            return response.status(200).send(generateResponse(200, game))
        } catch (err) {
            systemLogger.error(err);
            next(err);
        }
    });


export default router;
