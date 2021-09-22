import * as mongoose from 'mongoose';
import shortid from 'shortid';

const Schema = mongoose.Schema;

export const gameSchema = new Schema({
    gameId: {
        type: String,
        default: shortid.generate,
        unique: true
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
        const { questions = [] } = body;
        const game = new Game({ questions });
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