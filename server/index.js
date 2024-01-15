require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

try {
    mongoose.connect(process.env.MONGO_URL,console.log("Database connected"))
} catch (error) {
    console.log(error);
}

app.listen(3001,()=>console.log("server running"))