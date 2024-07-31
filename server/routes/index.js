const express = require('express')

const router = express.Router()

const userSignUpController = require('../controller/user/userSignup')
const userSignInController = require('../controller/user/userSignin')



router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)










module.exports = router