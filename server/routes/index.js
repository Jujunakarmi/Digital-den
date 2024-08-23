const express = require('express')

const router = express.Router()

const userSignUpController = require('../controller/user/userSignup')
const userSignInController = require('../controller/user/userSignin')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogoutController = require('../controller/user/userLogout')
const allUsersController = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const uploadProductController = require('../controller/products/uploadProduct')
const getProductController = require('../controller/products/getProduct')


router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken, userDetailsController)
router.get("/logout", userLogoutController)

//Admin Panel
router.get("/all-users", authToken, allUsersController)
router.post("/update-user", authToken, updateUser)

//Upload products
router.post("/upload-product",authToken, uploadProductController)

//Get All Products
router.get("/get-product", getProductController)





module.exports = router