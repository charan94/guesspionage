import { checkSchema } from 'express-validator';

export const gameValidator = {
    gameInfo: checkSchema({
        gameId: {
            in: ['params'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'gameId is required'
            }
        }
    }),
    createGame: checkSchema({
        userId: {
            in: ['params'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'userId is required'
            }
        }
    }),
    updateGame: checkSchema({
        gameId: {
            in: ['params'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'gameId is required'
            }
        },
        status: {
            in: ['body'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'status is required'
            }
        }
    })
}