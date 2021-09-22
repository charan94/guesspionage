import mongoose from 'mongoose';

// handling exceptions.
process.on('uncaughtException', (err) => {
    console.log(`uncaughtException occurred: ${err}`);
})

process.on('unhandledRejection', (err) => {
    console.log(`unhandledRejection occurred: ${err}`);
})

// mongodb connect.

export const connectMongo = async () => {
    try {
        const url = `${process.env.DB_CONN_STR}`;
        let mongoConnect;
        if (mongoose.connections[0].readyState === 0 || mongoose.connections[0].readyState === 3) {
            mongoConnect = await mongoose.connect(url);
        } else {
            console.log(`mongo conn exists: ${mongoose.connections[0].readyState}`);
        }
        return mongoConnect;
    } catch (e) {
        console.log(e);
        throw Error(MESSAGES.MONGO_CONNECTION_ERROR);
    }
}

mongoose.connection.on('error', (err) => {
    console.log(`mongoose connection error occurred: ${err}`);
});
mongoose.connection.on('open', (err) => {
    console.log(`mongoose connection done. auth`);
});