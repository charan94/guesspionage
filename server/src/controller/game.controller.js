import { Router } from 'express';

const router = Router();

router.get('/create/:userId', (request, response, next) => {
    const userId = request.params.userId;
    
});


router.post('/update/:gameid', (request, response, next) => {

});


export default router;
