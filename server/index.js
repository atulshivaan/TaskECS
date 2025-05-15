import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import morgan from "morgan";
import Connectdb from "./utils/db.connection.js";
import userRouter from "./routes/user.routes.js";
import taskRouter from "./routes/task.route.js";


dotenv.config();


const app =express();
const port =process.env.PORT ||5000


app.use(bodyParser.json())
app.use(morgan("dev"))



app.use("/api/auth",userRouter)
app.use("/api/tasks",taskRouter)

app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`);
    Connectdb();
    
})