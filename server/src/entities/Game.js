import * as mongoose from 'mongoose';
import shortid from 'shortid';
import { GAME_STATUS } from '../constants';

const Schema = mongoose.Schema;

export const gameSchema = new Schema({
    gameId: {
        type: String,
        default: shortid.generate,
        unique: true
    },
    status: {
        type: String,
        enum: Object.values(GAME_STATUS),
        default: GAME_STATUS.PENDING
    },
    questions: [{
        type: Schema.Types.ObjectId,
        ref: "Question"
    }]
}, { timestamps: true, versionKey: false });

gameSchema.index({
    gameId: 1
}, {
    unique: true
});

class GameModel {
    static async create(body) {
        const { questions = [], status } = body;
        const game = new Game({ questions, status });
        const createdGame = await game.save();
        return createdGame;
    }

    async update(game) {
        this.questions = !(game.questions === undefined || game.questions === null) ? game.questions : this.questions;
    }
}

gameSchema.loadClass(GameModel);


export const Game = mongoose.model("Game", gameSchema);

Game.ensureIndexes();