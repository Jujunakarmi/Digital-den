const express = require('express')

const router = express.Router()

const userSignUpController = require('../controller/user/userSignup')
const userSignInController = require('../controller/user/userSignin')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogoutController = require('../controller/user/userLogout')



router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken, userDetailsController)
router.get("/logout", userLogoutController)










module.exports = router