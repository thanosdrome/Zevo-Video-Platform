import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONOGDB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch(err){
        console.log("MONGODB connection error", err);
        process.exit(1)
    }
}

export default connectDB;