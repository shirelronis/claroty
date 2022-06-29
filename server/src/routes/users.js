const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users.js')

router.get('/', usersController.getUsersList)
router.post('/signIn', usersController.SignIn)

module.exports = router;