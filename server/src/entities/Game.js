import * as mongoose from 'mongoose';
import shortid from 'shortid';

const Schema = mongoose.Schema;

export const gameSchema = new Schema({
    gameId: {
        type: String,
        default: shortid.generate
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


export const Game = mongoose.model("Game", gameSchema);