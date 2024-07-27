const router = require('express').Router();

const {createUser, login} = require('../../controller/userController')


router.route('/').post(createUser);

router.route('/login').post(login);

module.exports = router;