//this is the server controller where i do send data to the back end....
const User = require('../Model/user')
const Post = require('../Model/postModel')
const Comment = require('../Model/commentModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6; // tell bcrypt how many times to randomize the generation of salt. usually 6 is enough.




//SignUp A User
const postCreateUser = async (req, res, next) => {
    try{
        //CREATE USER
        const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
        const newUser = new User ({
        // id: req.body.id,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        socialMedia: 
            {
              facebook: '',
              twitter: '',
              instagram: '',
              pinterest: '',
              youtube: '',
              rss: ''
            }
    })
        // //SAVE USER IN THE DB
        const user = await newUser.save()
        const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
        // send a response to the front end
        res.status(200).json(token)
    
    }catch {
      res.status(400).json('Bad Credentials');
    }   
}

// Login a User
const getLogIn = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
          // check password. if it's bad throw an error.
          if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();
  
      // if we got to this line, password is ok. give user a new token.
      const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
      res.json(token)
    } catch {
      res.status(400).json('Bad Credentials');
    }
}


//Creating A Post
const postCreatePost = async (req, res, next) => {
    const userId = req.body.userId
    const newPost = new Post ({
        author : userId,
        title: req.body.title,
        city: req.body.city,
        country: req.body.country,
        tags: req.body.tags,
        story: req.body.story,
        images:req.body.images

    })
    newPost.save().then((resp) => {
        // console.log(result)
        const postId = {trip: resp._id}
        User.findById(userId)
        .then(user => {
            // push the id into the user post array
            user.post.push(postId)
            user.save()
            .then(result => {
                res.status(200).json(result)

            })
        })
    })
    .catch(err => res.status(400).json(err))
        
}


//Creating A Post Comments
const postCreateComment = async (req, res, next) => {
    const postId = req.body.postId     
    const loggedInUserId = req.body.loggedInUserId  
    const newComment = new Comment ({
        comment: req.body.comment,
        userId: loggedInUserId,
        postId: postId
    })
    newComment.save()
    .then(resp => {
        const commentId = {comment:resp._id}
        // find the Post or Trip
        Post.findById(postId)
        .then(post => {
            // Push the comment into the right post
            const comments = post.comments
            comments.push(commentId)
                post.save().then(result => {
                    res.status(200).json(result)
                })
            
        })
    })
    .catch(err => console.log(err))
        
}

//RETRIVE ALL POSTS
const getPostsPage = async(req, res, next) => {
    await Post.find()
    .populate('author')
    .exec()
    .then(posts => {
        res.send({posts});
    })
    .catch(err => res.status(400).json(err))
}


//RETRIVE A Post BY ID
const getAPostByID = (req, res, next) => {
    const postId = req.params.id;
    Post.findById(postId)
    .populate({
        path: 'comments.comment',
        populate: ({ 
            path: 'userId',
            populate: {path: 'post'}
        }),
        // path: 'author'
    })
    .exec()
    .then(post => {
        User.findById(post.author)
        .populate({
            path: 'post.trip',
            populate:({
                path: 'comments.comment',
                populate: ({ 
                    path: 'userId',
                    populate: {path: 'post'}
                }) 
            })
        })
        .exec()
        .then(author => {
            res.send({author, post})
        })

    })
    .catch(err => res.status(400).json(err))
}



// //RETRIVE A user BY ID
const getUserByID = (req, res, next) => {
    const authorId = req.params.id;
    console.log(authorId)
    User.findById(authorId)
    .populate({
        path: 'post.trip',
        populate:({
            path: 'comments.comment',
            populate: ({ 
                path: 'userId',
                populate: {path: 'post'}
            }) 
        })
    })
    .exec()
    .then(user => {
        console.log(user)
        res.send({user})
    })
    .catch(err => res.status(400).json(err))
}



// POSTING UPDATED USER INFO
const postEdit = (req, res, next) => {
    const id = req.params.id;
    User.findById(id)
    .then(user => {
        user.name = req.body.name;
        user.userName = req.body.userName;
        user.email = req.body.email;
        user.slogan =  req.body.slogan;
        user.aboutMe =  req.body.aboutMe;
        user.myCity =  req.body.myCity;
        user.myStateProvince =  req.body.myStateProvince;
        user.myCountry =  req.body.myCountry;
        user.socialMedia[0].facebook = req.body.socialMedia[0].facebook;
        user.socialMedia[0].twitter = req.body.socialMedia[0].twitter;
        user.socialMedia[0].instagram = req.body.socialMedia[0].instagram;
        user.socialMedia[0].pinterest = req.body.socialMedia[0].pinterest;
        user.socialMedia[0].youtube = req.body.socialMedia[0].youtube;
        user.socialMedia[0].rss = req.body.socialMedia[0].rss;

        return user.save()
    })
    .then((user) => {
        const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
        res.status(200).json(token)
    })
    .catch(err => res.status(400).json(err));
}

//DELETING A USER
const postDelete = async (req, res, next) => {
    const id = req.params.id;
    console.log(id)
    await User.findByIdAndDelete(id)
    .then(result => {
        console.log(result)
          res.status(200).json(result)
      })
    .catch(err => res.status(400).json(err))
}

module.exports = {
    postCreateUser,
    getLogIn,
    postCreatePost,
    postCreateComment,
    getPostsPage,
    getUserByID,
    getAPostByID,
    postEdit, 
    postDelete
}