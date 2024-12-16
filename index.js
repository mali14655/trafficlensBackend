import express from "express"
import { ConnectToMongoDb } from "./connect.js";
// import {router} from "./routes/userRouter.js"

import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/userRouter.js";
import { handleCreateUser } from "./controller/user.js";


dotenv.config();
const app=express();
const url=`${process.env.BASE_URL}`;
const PORT=process.env.PORT || 4000;
// Connection
ConnectToMongoDb(url)
.then(()=>{
    console.log("Successfully Connected !")
})
.catch((err)=>{
    console.log(err);
})


//middlewares
app.use(cors());
// app.use(cors({
//     origin: 'https://trafficlens-frontend.vercel.app', // Your live frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow necessary HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
// }));
app.use(express.json());


app.use("/user",router);
app.post('/create',handleCreateUser);
app.use("/",(req,res)=>{
    res.send("Succefully Done !");
})
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Path: ${req.path}`);
    next();
});






app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}.`)
})
