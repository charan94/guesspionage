import { Router } from 'express';
import userController from '../controller/user.controller';
import resultsController from '../controller/results.controller';
import gameController from '../controller/game.controller';

const router = Router();

router.use('/user', userController);

router.use('/results', resultsController);

router.use('/game', gameController);

export default router;