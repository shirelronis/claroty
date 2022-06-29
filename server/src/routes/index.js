const express = require('express');
const router = express.Router();

const usersRouter = require('./users.js')
const emailsRouter = require('./emails.js')

router.use('/users', usersRouter)
router.use('/emails', emailsRouter)

router.get('/health', (req, res) => {
    res.status(200).send('Ok');
});

module.exports = router

