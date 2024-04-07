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

const corsConfig = {
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }

export const app = express();


//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors())

//Routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);






app.get('/',(req,res)=>{
    res.send("home");
})



app.use(errorMiddleWare);















