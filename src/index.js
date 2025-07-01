import dotenv from "dotenv"
import connectDB from "./db/index.js";
connectDB()

dotenv.config({
    path: './env'
})






/*
import express from "express"
const app =express()

//IIFE starting with semi (cross check)
;(async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       //listeners 
        app.on("error",()=>{
        console.log("err:",error);
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port $
            {process.env.PORT}`);
    })
    }
   
    catch(error)
    {
        console.error("ERROR:", error)
        throw err
    }
}) () */