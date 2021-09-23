import { connectMongo } from "../db"
import { User } from "../entities/User";


export default {
    async checkUserName(userName) {
        await connectMongo();
        const user = await User.findOne({ userName });
        return { available: !user }
    },
    async createUser(body) {
        await connectMongo();
        const existingUser = await User.findOne({ userName: body.userName });
        if (existingUser) {
            return { user: existingUser }
        }
        const user = await User.create(body);
        return { user };
    },
    async findUser(userId) {
        await connectMongo();
        const user = await User.findOne({ userId });
        if (!user) {
            throw { status: 400, message: `User not found with id ${userId}` }
        }
        return user;
    },
    async updateUser(userId, body) {
        await connectMongo();
        const user = await User.findOneAndUpdate({ userId }, body, { new: true });
        if (!user) {
            throw { status: 400, message: `Cannot update user with id - ${userId}. Reason: User not found...` };
        }
        return user;
    },
    async findUserStats(userId) {
        await connectMongo();
        const user = await User.findOne({ userId }, 'userId userName games').populate({ path: 'games', select: 'gameId status questions', populate: { path: 'questions', select: 'questionId level question answer score' } });
        if (!user) {
            throw { status: 400, message: `User not found with id ${userId}` };
        }
        return user;
    }
}