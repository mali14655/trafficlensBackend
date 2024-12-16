import express, { Router } from "express";
import { handleCreateUser,handleVisitUser,handleAnalysisUser } from "../controller/user.js";



const userRouter=express.Router();

//Routes
userRouter.get('/creat',(req,res)=>{
    res.send("api calling correct")
});
userRouter.post('/create',handleCreateUser);
userRouter.get('/visit/:id',handleVisitUser);
userRouter.get('/analysis/:websiteName',handleAnalysisUser);


export {userRouter};