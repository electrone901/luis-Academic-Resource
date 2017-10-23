const express = require('express')
const router = express.Router()
// const fs = require('fs')
// const getSlug = require('speakingurl');


router.use('/post', require('./post'))
router.use('/student', require('./student'))
router.use('/sign-up', require('./sign-up'))
router.use('/', require('./college'))


module.exports = router
