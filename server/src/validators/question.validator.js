import { checkSchema } from "express-validator";

export const questionValidator = {
    createQuestion: checkSchema({
        gameId: {
            in: ['params'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'gameId is required'
            }
        },
        level: {
            in: ['body'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'level is required'
            }
        },
        question: {
            in: ['body'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'question is required'
            }
        },
        answer: {
            in: ['body'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'answer is required'
            }
        },
        score: {
            in: ['body'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'score is required'
            }
        }
    })
}