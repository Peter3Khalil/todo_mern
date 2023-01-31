import express  from "express";
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 3000;
// Import Routes
import taskRoutes from "./Routes/task.js";

//Middelwares
app.use(express.json());
app.use(cors());
//Mongoose connection
mongoose.set('strictQuery', false);
const connect = async()=>{
  try {
    await mongoose.connect(process.env.LOCAL_MONGO);
    console.log("connected to mongodb")
  } catch (error) {
    throw error.message;
  }
}
mongoose.connection.on("connected",()=>{
  console.log("MongoDb is connected")
})
mongoose.connection.on("disconnected",()=>{
  console.log("MongoDb is disconnected")
});

//routes
app.use("/tasks",taskRoutes);

app.listen(port,()=>{
  connect();
  console.log(`server is running on port : ${port}`)
})
