const express = require("express")
const router = express.Router()
const session=require("../config/sessionMiddleware.js")
const controller=require("../controller/userController.js")

router.use(session)

router.post("/register", controller.signup)
router.post("/login", controller.login)
router.post("/logout", controller.logout)
router.post("/passwords", controller.storePassword)
router.get("/passwords",controller.showStoredPasswords)

module.exports=router