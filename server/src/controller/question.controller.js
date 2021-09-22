import { Router } from 'express';
import { systemLogger } from '../config/logger';
import { generateResponse } from '../utils';
import questionService from '../service/question.service';
import { validateRequest } from '../middlewares/validation.middleware';
import { questionValidator } from '../validators/question.validator';

const router = Router();

router.post(
    '/create/:gameId',
    questionValidator.createQuestion,
    [validateRequest],
    async (request, response, next) => {
        try {
            const params = matchedData(request, { locations: ['params'] });
            const gameId = params.gameId;
            const body = matchedData(request, { locations: ['body'] });
            const question = await questionService.createNewQuestion(gameId, body);
            return response.status(200).send(generateResponse(200, question));
        } catch (err) {
            systemLogger.error(err);
            next(err);
        }
    });

export default router;
