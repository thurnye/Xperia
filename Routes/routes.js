const Controller = require('../Controller/controller');
const router = require('express').Router()

//get all users
router.get('/', Controller.getPostsPage)
 
//post new user
router.post('/api', Controller.postCreateUser);

//post new user experience
router.post('/api/post', Controller.postCreatePost);

//post new user experience comment
router.post('/api/post/comment', Controller.postCreateComment);

//getting a post by id
router.get('/api/:id', Controller.getAPostByID);


// POST /api/users/login
router.post('/api/user/login', Controller.getLogIn);

//getting an author or loggedIn User account by id
router.get('/api/user/:id', Controller.getUserByID);


//getting an comments by id
// router.get('/api/comment/:id', Controller.getACommentByID);

//get user to edit
// router.get('/edit/:id', Controller.getEdit);

//post the edited user
router.post('/edit/:id', Controller.postEdit);

//delete a particular post
router.post('/api/removePost/:id', Controller.postDeleteAPost);


//delete a particular user
router.post('/api/deleteUser/:id', Controller.postDeleteAUser);




module.exports = router;