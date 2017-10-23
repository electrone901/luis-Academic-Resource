const express = require('express')
const models = require('../models')
const router = express.Router()
const Student = require('../models/student')
const getSlug = require('speakingurl')
const Redirect = require('../middlewares/redirect')

// get all posts: http://localhost:8000/post/
router.get('/', (req, res) => {
  models.Post.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR while getting findAll Post', err)
      res.redirect('/error')
    })
})

// creates a post
router.post('/new-post', (req, res) => {
  // models.Post.create({
  //   title: req.body.title,
  //   body: req.body.body
  // })
  req.post.createPost({
      slug: getSlug(req.body.title.toLowerCase()),
      title: req.body.title.toLowerCase(),
      body: req.body.body,
  })
    .then((college) => {
      res.send(college)
    })
    .catch((err) => {
      console.log('ERROR while creating a new College', err)
      res.send('/error')
    })
})

// gets a post by slug
router.get('/:username/:slug', (req, res) => {
	 models.Post.findOne({
      where: {
        slug: req.params.slug,
      },
      include: [{
        model: models.User,
        where: {
          username: req.params.username,
        },
      }],
    })
	 .then((college) => {
      res.send(college)
    })
    .catch((err) => {
      console.log('ERROR while creating a new College', err)
      res.send('/error')
    })
})

// updates a post 
router.put('/:username/:slug', (req, res) => {
	models.Post.findOne({
		where: {slug: req.params.slug},
		include: [{
        model: models.User,
        where: {
          username: req.params.username,
        },
      }]
	})
	.then((postInfo) => {
      postInfo.update({
        title: req.body.title.toLowerCase(),
      	slug: getSlug(req.body.title.toLowerCase()),
      	body: req.body.body
      })
    })
})

// deletes a post
router.delete('/:username/:slug', (req, res) => {
	models.Post.destroy({
      where: {
        slug: req.params.slug,
      },
      include: [{
        model: models.User,
        where: {
          username: req.params.username,
        },
      }],
    })
    .then((id) => {
      res.send('Successufully deleted!')
    })
})


// router.post('/new-post', (req, res) => {
// 	models.Post.create({
//       slug: getSlug(req.body.title.toLowerCase()),
//       title: req.body.title.toLowerCase(),
//       body: req.body.body,
//     })
//     .then((data) => {
//     	res.send(data)
//     })
//     .catch((err) => {
//     	console.log('ERROR while creating a post', err)
//     	res.redirect('/err')
//     })
// })

// router.post('/', (req, res) => {
// 	req.user.createPost({
//       slug: getSlug(req.body.title.toLowerCase()),
//       title: req.body.title.toLowerCase(),
//       body: req.body.body,
//     }).then((post) => {
//       res.redirect(`/posts/${req.user.username}/${post.slug}`);
//     }).catch(() => {
//       res.render('posts/new');
//     });
// })


// find one post by title
// router.get('/single', (req, res) => {
//     // using the association
//     models.Post.findOne({
//       where: {
//         slug: req.params.slug,
//       },
//       include: [{
//         model: models.Student,
//         where: {
//           userName: req.params.userName,
//         },
//       }],
//     }).then((post) => {
//       (post ? res.render('posts/single', { post, user: post.user }) : res.redirect('/posts'))
//     })
// })



// const express = require('express')
// const models = require('../models')
// const router = express.Router()

// // const Redirect = require('../middlewares/redirect')
// // const User = require('../models/post')

// // const getSlug = require('speakingurl');


// //  gets all colleges
// router.get('/', (req, res) => {
//   models.Post.findAll({
//       include: [{model: models.User}]
//     })
//     .then((data) => {
//       res.send(data)
//     })
//     .catch((err) => {
//       console.log('ERROR while getting findAll Posts', err)
//       res.redirect('/error')
//     })
// })


module.exports = router