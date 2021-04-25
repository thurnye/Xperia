//this is the server controller where i do send data to the back end....
const User = require('../Model/user')
const jwt = require('jsonwebtoken');






//Creating A User
const postCreateUser = async (req, res, next) => {
    //get the info from the front-end and send to the db
    //CREATE USER
    const newUser = new User ({
        // id: req.body.id,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    console.log(newUser)
    // //SAVE USER IN THE DB
    newUser.save()
    .then(user => {
        const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
        // send a response to the front end
        res.status(200).json(token)
    })
    .catch(err => res.status(400).json(err))
        
}

//Creating A User Experience
const postCreateUserExperience = async (req, res, next) => {
    const userId = req.body.userId
    const newExp = {
        title: req.body.title,
        city: req.body.city,
        country: req.body.country,
        tags: req.body.tags,
        story: req.body.story,
        images:req.body.images

    }
    User.findById(userId)
    .then(user => {
        console.log(newExp)
        user.experience.push(newExp)
        user.save().then((result) => {
            console.log(result)
        })
    })
    
    // console.log(req.body)
    //CREATE USER EXPERIENCE
    // User.experience.push(req.body)
    // User.save((err)=>{
    //     console.log(err)
    // })
    
    // console.log(newUser)
    // // //SAVE USER IN THE DB
    // newUser.save()
    // .then(result => {
    //     // send a response to the front end
    //     res.status(200).json(result)
    // })
    // .catch(err => res.status(400).json(err))
        
}

//RETRIVE ALL USER
const getHompage = async(req, res, next) => {
    await User.find().then(users => {
        res.send({users});
    })
    .catch(err => res.status(400).json(err))
}


//RETRIVE A USER BY ID
const getAUserByID = (req, res, next) => {
    const id = req.params.id;
    User.findById(id)
    .then(data => {
        res.send({data})
    })
    .catch(err => res.status(400).json(err))
}



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
    postCreateUserExperience,
    getHompage,
    getAUserByID,
    getEdit,
    postEdit, 
    postDelete
}