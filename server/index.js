require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const router = require('./routes/route')
const session=require("../server/config/sessionMiddleware")
const cors=require("cors")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: process.env.WEBSITE, credentials: true }));
app.options("*", cors());
app.use("/api",router)
app.use(session);

try {
    mongoose.connect(process.env.MONGO_URL,console.log("Database connected"))
} catch (error) {
    console.log(error);
}

app.listen(3001,()=>console.log("server running"))