import { Router } from 'express';
import userService from '../service/user.service'
import { generateResponse } from '../utils';

const router = Router();

router.get('/info/:userId', async (request, response, next) => {
    const userId = request.params.userId;
    return response.status(200).send(`hello ${userId}`)
});

router.get('/check/:userName', (request, response, next) => {
    try {
        const userName = request.params.userName;
        const result = await userService.checkUserName(userName);
        return response.status(200).send(generateResponse(result));
    } catch (err) {
        next(err);
    }
});


router.post('/update/:userId', async (request, response, next) => {

});


router.post('/create', async (request, response, next) => {

});


router.get('/stats/find', async (request, response, next) => {

});

router.get('/stats/find/:userId', async (request, response, next) => {

});

export default router;