import express from "express"
import router from "./routes/user.js";
import { config } from "dotenv";


config({
    path:"./data/.env"
})


export const app = express();


//Middlewares
app.use(express.json());
app.use("/users",router);




app.get('/',(req,res)=>{
    res.send("home");
})


















