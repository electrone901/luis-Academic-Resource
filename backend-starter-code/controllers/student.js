const express = require('express')
const models = require('../models')
const router = express.Router()
const Post = require('../models/post');

//  gets a student by userName with all post: http://localhost:8000/student/David123
router.get('/:userName', (req, res) => {
  models.Student.findOne({
    where: {userName: req.params.userName},
    include: [{model: models.Post}]
  })
  .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR while getting a Student with his/her information', err)
      res.redirect('/error')
    })
})

//  gets all student
router.get('/', (req, res) => {
  models.Student.findAll()
    .then((data) => {
      console.log('user.posts:',{allPosts: user.posts[0]})
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR while getting findAll Student', err)
      res.redirect('/error')
    })
})

module.exports = router
