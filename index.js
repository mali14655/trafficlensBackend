import express from "express"
import { ConnectToMongoDb } from "./connect.js";
import {userRouter} from "./routes/userRouter.js"
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const app=express();
const PORT=3000;
const url=`mongodb+srv://mali146643:${process.env.PASSWORD}cluster0.jbbwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//Connection
ConnectToMongoDb(url)
.then(()=>{
    console.log("Successfully Connected !")
})
.catch((err)=>{
    console.log(err);
})


//middlewares
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}))


app.get("/",(req,res)=>{
    res.send("Succefully Done !");
})
app.use("/user",userRouter);



app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}.`)
})
