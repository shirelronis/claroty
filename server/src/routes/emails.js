const express = require('express')
const router = express.Router()

const emailssController = require('../controllers/emails.js')

router.get('/', emailssController.getEmailList)
router.post('/send', emailssController.Send)

module.exports = router;