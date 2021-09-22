import { checkSchema } from 'express-validator';

export const userValidator = {
    getUserInfo: checkSchema({
        userId: {
            in: ['params'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'userId is required'
            }
        }
    }),
    checkUserName: checkSchema({
        userName: {
            in: ['params'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'userName is required'
            }
        }
    }),
    updateUser: checkSchema({
        userId: {
            in: ['params'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'userId is required'
            }
        }
    }),
    createUser: checkSchema({
        userName: {
            in: ['body'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'userName is required'
            }
        }
    }),
    getUserStats: checkSchema({
        userId: {
            in: ['params'],
            trim: true,
            escape: true,
            notEmpty: {
                errorMessage: 'userId is required'
            }
        }
    }),

}