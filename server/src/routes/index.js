import { Router } from 'express';
import userController from '../controller/user.controller';
import questionController from '../controller/question.controller';
import gameController from '../controller/game.controller';

const router = Router();

router.use('/user', userController);

router.use('/question', questionController);

router.use('/game', gameController);

export default router;