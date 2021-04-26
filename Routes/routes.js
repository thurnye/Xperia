const Controller = require('../Controller/controller');
const router = require('express').Router()

//get all users
router.get('/', Controller.getPostsPage)
 
//post new user
router.post('/api', Controller.postCreateUser);

//post new user experience
router.post('/api/experience', Controller.postCreateUserExperience);

//post new user experience comment
router.post('/api/experience/comment', Controller.postCreateUserExperienceomment);

//getting a post by id
router.get('/api/:id', Controller.getAPostByID);


// POST /api/users/login
router.post('/api/user/login', Controller.getLogIn);
//getting a user/author by id
// router.get('/api/user/:id', Controller.getUserByID);


//getting an comments by id
// router.get('/api/comment/:id', Controller.getACommentByID);

//get user to edit
router.get('/edit/:id', Controller.getEdit);

//post the edited user
router.post('/edit/:id', Controller.postEdit);

//post delete
router.post('/api/:id', Controller.postDelete);




module.exports = router;