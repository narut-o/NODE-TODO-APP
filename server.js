import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`server running  in ${process.env.NODE_ENV} MODE`);
})
