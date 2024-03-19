import express from "express"
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.js"
import { errorMiddleWare } from "./middlewares/error.js";

config({
    path:"./data/.env"
})


export const app = express();


//Middlewares
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);






app.get('/',(req,res)=>{
    res.send("home");
})



app.use(errorMiddleWare);















