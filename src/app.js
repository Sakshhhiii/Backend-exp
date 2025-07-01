import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit:"16kb"}))
//for computing whitespaces, can pass obj in obj =>extended
app.use(express.urlencoded({extended: true,limit: "16kb"}))
//to store pdf or files in a public(any name) folder
app.use(express.static("public"))
//cookie in browser
app.use(cookieParser())
 
 
export {app}