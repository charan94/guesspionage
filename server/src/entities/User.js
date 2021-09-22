import * as mongoose from 'mongoose';
import shortid from 'shortid';

const Schema = mongoose.Schema;

const userSchemaModel = {
    userId: {
        type: String,
        default: shortid.generate,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
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

class UserModel {
    static async create(body) {
        const { userName, games = [] } = body;
        const user = new User({ userName, games });
        const createdUser = await user.save();
        return createdUser;
    }

    async update(user) {
        this.games = !(user.games === undefined || user.games === null) ? user.games : this.games;
        this.userName = !(user.username === undefined || user.username === null) ? user.userName : this.userName;
    }
}

userSchema.loadClass(UserModel);


export const User = mongoose.model("User", userSchema);

User.ensureIndexes();