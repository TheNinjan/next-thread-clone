import { log } from "console";
import mongoose from "mongoose"
let isConnected =false
export const connectToDB=async()=>{
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URL) return console.log("Mongodb URL not found ");
    try {
          await mongoose.connect(process.env.MONGODB_URL)
          isConnected=true;
          console.log("MONGODB connected succcessfully.....");
          
    } catch (error) {
        console.log(error)
    }
    

}