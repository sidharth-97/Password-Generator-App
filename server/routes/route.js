const express = require("express")
const router = express.Router()
const controller=require("../controller/userController.js")

router.post("/register", controller.signup)
router.post("/login",controller.login)

module.exports=router