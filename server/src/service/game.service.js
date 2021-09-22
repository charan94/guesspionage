import { systemLogger } from "../config/logger";
import { connectMongo } from "../db";
import { Game } from '../entities/Game';
import { User } from "../entities/User";

export default {
    async createNewGame(userId) {
        await connectMongo();
        const game = await Game.create({});
        if (!game) {
            throw { status: 400, message: `Unable to create a new game for user ${userId}` };
        }
        const user = await User.findOneAndUpdate({ userId }, { $push: { games: game._id } });
        if (!user) {
            await Game.findByIdAndRemove(game._id);
            throw { status: 400, message: 'User not found' };
        }
        return { game };
    },
    async updateGame(gameId, status) {
        await connectMongo();
        const game = await Game.findOneAndUpdate({ gameId }, { status }, { new: true });
        if (!game) {
            throw { status: 400, message: "Game not found!" };
        }
        return game;
    },
    async findGame(gameId) {
        await connectMongo();
        const game = await Game.findOne({ gameId }).populate({ path: 'questions' });
        if (!game) {
            throw { status: 400, message: 'Game not found' }
        }
        return game;
    }
}