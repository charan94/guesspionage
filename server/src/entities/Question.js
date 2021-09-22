import * as mongoose from 'mongoose';
import shortid from 'shortid';
import { GAME_LEVEL } from '../constants';

const Schema = mongoose.Schema;

export const questionSchema = new Schema({
    questionId: {
        type: String,
        default: shortid.generate
    },
    level: {
        type: String,
        enum: Object.values(GAME_LEVEL),
        default: GAME_LEVEL.VERY_EASY
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String
    },
    score: {
        type: Number,
        required: true
    }
}, { timestamps: true, versionKey: false });

questionSchema.index({
    questionId: 1
}, {
    unique: true
});


export const Game = mongoose.model("Game", questionSchema);