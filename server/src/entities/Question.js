import * as mongoose from 'mongoose';
import shortid from 'shortid';
import { GAME_LEVEL } from '../constants';

const Schema = mongoose.Schema;

export const questionSchema = new Schema({
    questionId: {
        type: String,
        default: shortid.generate,
        unique: true
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

class QuestionModel {
    static async create(body) {
        const { level, question, answer = "", score = 0 } = body;
        const quesTion = new Question({ level, question, answer, score });
        const createdQuestion = await quesTion.save();
        return createdQuestion;
    }

    async update(body) {
        this.level = !(body.level === undefined || body.level === null) ? body.level : this.level;
        this.question = !(body.question === undefined || body.question === null) ? body.question : this.question;
        this.answer = !(body.answer === undefined || body.answer === null) ? body.answer : this.answer;
        this.score = !(body.score === undefined || body.score === null) ? body.score : this.score;
    }
}

questionSchema.loadClass(QuestionModel);


export const Question = mongoose.model("Question", questionSchema);

Question.ensureIndexes();