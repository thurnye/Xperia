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
    console.log(req.body.tags)
    const newPost = new Post ({
        author : userId,
        title: req.body.title,
        city: req.body.city,
        country: req.body.country,
        tags: [req.body.tags],
        story: req.body.story,
        images:[req.body.images]

    })
    newPost.save().then((resp) => {
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
    })
    .exec()
    .then(post => {
        // console.log(post)
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

// POSTING UPDATED POST
const postEditPost = (req, res, next) => {
    const id = req.params.id;
    console.log(id)
    Post.findById(id)
    .then(post => {
        console.log(post)
        post.title= req.body.title
        post.city= req.body.city
        post.country= req.body.country
        post.tags[0]= [req.body.tags]
        post.story= req.body.story
        post.images=[req.body.image]
        return post.save()
    })
    .then((post) => {
        res.status(200).json(post)
    })
    .catch(err => res.status(400).json(err));
}

//DELETING A USER
const postDeleteAPost = async (req, res, next) => {
    // try{ 
    const postId = req.params.id;
    let authorId = ''

    const post =  await Post.findById(postId)

    authorId = post.author._id
    

    // delete Poost from author account
    const author = await User.findById(authorId)
    const allPost = author.post

    console.log(allPost)
    for(let i=0; i < allPost.length; i++){
        console.log(allPost[i])
        if(allPost[i].trip._id.toString() === postId.toString()){
        //    remove the post in user acct
            allPost.splice(i, 1)
            author.save()
            // delete the post 
            post.remove()
            res.status(200)
        }
    }
}


// delete controller
const postDeleteAUser = async (req, res, next) => {
    try{ 
    const userId = req.params.id;
    console.log(userId)
    // // find the user //
    const user = await User.findById(userId)
    user.deleteOne()

    //find all post where authorId ===== userId
        const PostDel= await Post.deleteMany({
            'author': userId
        })
        console.log(PostDel)
    res.status(200).json()
    }catch(err) {
        console.log(err)
        res.status(400).json(err);
      }

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
    postEditPost,
    postDeleteAPost,
    postDeleteAUser
}