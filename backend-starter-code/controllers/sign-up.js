const express = require('express')
const models = require('../models')
const router = express.Router()


 // creates a student: http://localhost:8000/sign-up remember email, user and cunyid are unique
router.post('/', (req, res) => {
  models.Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    cunyEmail: req.body.cunyEmail,
    cunyId: req.body.cunyId,
    college: req.body.college,
    passwordHash: req.body.passwordHash
  })
    .then((student) => {
      res.send(student)
    })
    .catch((err) => {
      console.log('ERROR while creating a new Student', err)
      res.send('/sign-up')
    })
})

module.exports = router;
