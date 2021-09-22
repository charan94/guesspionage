import { connectMongo } from "../db"
import { User } from "../entities/User";


export default {
    async checkUserName(userName) {
        await connectMongo();
        const user = await User.findOne({ userName });
        return { available: !user }
    },
    async createUser() {

    },
    async findUser() {

    },
    async findUserStats() {

    },
    async findAllUserStats() {

    }
}