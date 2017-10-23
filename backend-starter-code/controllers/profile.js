const express = require('express')
const models = require('../models')
const Redirect = require('../middlewares/redirect');
const router = express.Router()

// check: is it working?
router.get('/', (req, res) => {
	// ifNotLoggedIn calls redirect which takes u to login
	req.Redirect.ifNotLoggedIn()

	// renders the profile page.	
	res.render('profile', { user: req.user, success: req.flash('success') });
})

// module.exports = {
//   registerRouter() {
//     const router = express.Router();

//     router.get('/', Redirect.ifNotLoggedIn(), this.index);

//     return router;
//   },
//   index(req, res) {
//     res.render('profile', { user: req.user, success: req.flash('success') });
//   },
// };


module.exports = router;

// THINGS I DON'T UNDERSTAND:
// - LINE 8-13 https://github.com/CUNYTechPrep/ctp-microblog/blob/master/blog/controllers/profile.js

// honestly, I don't know how to add react js to our project (we are using the backend starter code) I was thinking on using the react cli but can we added to our project? https://github.com/facebookincubator/create-react-app 
