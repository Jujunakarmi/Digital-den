const router = require('express').Router();

const {createUser} = require('../../controller/userController')


router.route('/').post(createUser)
module.exports = router;