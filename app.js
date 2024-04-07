import express from "express"
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.js"
import { errorMiddleWare } from "./middlewares/error.js";
import cors from "cors";

config({
    path:"./data/.env"
})


export const app = express();
const corsConfig = {
    credentials:true,
    origin:true
}

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsConfig))

//Routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);






app.get('/',(req,res)=>{
    res.send("home");
})



app.use(errorMiddleWare);















