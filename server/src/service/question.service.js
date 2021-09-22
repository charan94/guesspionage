import { connectMongo } from '../db';
import { Game } from '../entities/Game';
import { Question } from '../entities/Question';

export default {
    async createNewQuestion(gameId, body) {
        await connectMongo();
        const question = await Question.create(body);
        if (!question) {
            throw { status: 400, message: 'Unable to create a new question' };
        }
        const game = await Game.findOneAndUpdate({ gameId }, { $push: { questions: question._id } }, { new: true });
        if (!game) {
            await Question.findByIdAndRemove(question._id);
            throw { status: 400, message: 'Game not found...' };
        }
        return question;
    },
    async updateQuestionParams(questionId, body) {

    }
}