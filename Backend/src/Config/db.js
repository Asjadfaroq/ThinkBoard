import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MonoDB);

        console.log("Database conne successfully");

    }catch(e){
        console.error("Error connecting to the database", e);
        process.exit(1);
    }
}