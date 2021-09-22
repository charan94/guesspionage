import { Router } from 'express';
import { systemLogger } from '../config/logger';
import { GAME_SETTINGS, THRESHOLD } from '../constants';
import gameService from '../service/game.service';
import { generateResponse } from '../utils';

const router = Router();

router.get('/settings', async (request, response, next) => {
    return response.status(200).send(generateResponse(200, { settings: GAME_SETTINGS, threshold: THRESHOLD }));
});


router.get('/info/:gameId', async (request, response, next) => {
    try {
        const gameId = request.params.gameId;
        const game = await gameService.findGame(gameId);
        return response.status(200).send(generateResponse(200, game))
    } catch (err) {
        systemLogger.error(err);
        next(err);
    }
});

router.post('/create/:userId', async (request, response, next) => {
    try {
        const userId = request.params.userId;
        const game = await gameService.createNewGame(userId);
        return response.status(200).send(generateResponse(200, game))
    } catch (err) {
        systemLogger.error(err);
        next(err);
    }
});


router.post('/update/:gameid', async (request, response, next) => {
    try {
        const gameId = request.params.gameId;
        const { status } = request.body;
        const game = await gameService.updateGame(gameId, status);
        return response.status(200).send(generateResponse(200, game))
    } catch (err) {
        systemLogger.error(err);
        next(err);
    }
});


export default router;
