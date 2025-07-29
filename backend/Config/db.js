import "dotenv/config"
import mongoose from "mongoose";

function ConnectDB() {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.log(err));
}

export default ConnectDB