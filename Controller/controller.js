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
                // res.status(200).json(result)
                console.log(result)

            })
        })
    })
    .catch(err => res.status(400).json(err))
        
}


//Creating A Post Comments
const postCreateComment = async (req, res, next) => {
    const postId = req.body.postId     //this is coming from the front end
    const loggedInUserId = '60873a341fa1f75dc1ee9a4a'  //this is a dummy logged in user id
    const newComment = new Comment ({
        comment: req.body.comment,
        userId: loggedInUserId,
        postId: postId
    })
    console.log(postId)
    console.log(newComment)
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
                    console.log(result)
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
        console.log(posts)
        res.send({posts});
    })
    .catch(err => res.status(400).json(err))
}


//RETRIVE A Post BY ID
const getAPostByID = (req, res, next) => {
    const postId = req.params.id;
    const author = [];
    // console.log(postId)
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
        // console.log(post.author)
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
            console.log(author)
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

// //RETRIVE A Comment BY ID     //this is will give us the user that created the comment
// const getACommentByID = (req, res, next) => {
//     const postId = req.params.id;
//     console.log(postId)
//     Post.findById(postId)
//     .populate('comments.comment')
//     .exec()
//     .then(post => {
//         console.log(post)
//         res.send({post})
//     })
//     .catch(err => res.status(400).json(err))
// }



//  GETTING A USER TO EDIT
const getEdit = (req, res, next) => {
    const id = req.params.id;
    User.findById(id)
    .then(data => {
        res.send({data})
    })
    .catch(err => res.status(400).json(err))
}

// POSTING UPDATED USER INFO
const postEdit = (req, res, next) => {
    const id = req.body.id;
    User.findById(id)
    .then(user => {
        user.name = req.body.name;
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;
        user.Email = req.body.email;
        return user.save()
    })
    .then((user) => {
        // send a response to the front end
        res.status(200).json(user)
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
    // getACommentByID,
    getUserByID,
    getAPostByID,
    getEdit,
    postEdit, 
    postDelete
}