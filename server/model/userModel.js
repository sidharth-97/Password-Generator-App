const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    data: {
        type:Array
    }
})

const userModel = mongoose.model("User", userSchema)

module.exports=userModel