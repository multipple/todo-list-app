import mongoose from "mongoose";
import dotEnv from 'dotenv';

// enable .dot
dotEnv.config();

// set strictQuery to false
mongoose.set('strictQuery', false);

// mongoDb 
const mongoDB = String(process.env.MONOGO_URL);

export const monogoConnect = async ()=>{
   return await mongoose.connect(mongoDB);
}