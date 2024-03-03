import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const Url = `mongodb+srv://${username}:${password}@cluster0.mh1trb7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(Url);
        console.log("Connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export { Connection };