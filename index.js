import express from "express"
import { ConnectToMongoDb } from "./connect.js";
import {userRouter} from "./routes/userRouter.js"
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const app=express();
const PORT=3000;
const url=`mongodb+srv://mali146643:${process.env.PASSWORD}@cluster0.jbbwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//Connection
// ConnectToMongoDb(url)
// .then(()=>{
//     console.log("Successfully Connected !")
// })
// .catch((err)=>{
//     console.log(err);
// })


//middlewares
app.use(cors({
    origin: 'https://trafficlens-frontend.vercel.app', // Your live frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow necessary HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));
app.use(express.json());


app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Path: ${req.path}`);
    next();
});


app.use("/user",userRouter);

app.use("/",(req,res)=>{
    res.send("Succefully Done !");
})



app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}.`)
})
