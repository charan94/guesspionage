import * as mongoose from 'mongoose';
import shortid from 'shortid';
import { gameSchema } from './Game';

const Schema = mongoose.Schema;

const userSchemaModel = {
    userId: {
        type: String,
        default: shortid.generate
    },
    userName: {
        type: String,
        required: true
    },
    games: [{
        type: Schema.Types.ObjectId,
        ref: "Game"
    }]
}

const userSchema = new Schema(userSchemaModel, { timestamps: true, versionKey: false });

userSchema.index({
    userId: 1,
    userName: 1
}, {
    unique: true
});

export const User = mongoose.model("User", userSchema);