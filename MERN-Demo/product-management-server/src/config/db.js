import mongoose from 'mongoose';

const connectDB = async () => {
    const DB_URI = process.env.DB_URI;
    try {
        await mongoose.connect(DB_URI);
        console.log(`MongoDB connected at: [${DB_URI}]`);
    } catch(error) {
        console.error(`MongoDB failed to connect at: [${DB_URI}]`);
        console.error(`Connection error: [${error}]`);
    }
}

export default connectDB;