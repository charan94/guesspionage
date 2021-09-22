import { Router } from 'express';
import { systemLogger } from '../config/logger';
import { generateResponse } from '../utils';
import questionService from '../service/question.service';

const router = Router();

router.post('/create/:gameId', async (request, response, next) => {
    try {
        const gameId = request.params.gameId;
        const { question, level, answer, score } = request.body;
        const question = await questionService.createNewQuestion(gameId, { question, level, answer, score });
        return response.status(200).send(generateResponse(200, question));
    } catch (err) {
        systemLogger.error(err);
        next(err);
    }
});

export default router;
