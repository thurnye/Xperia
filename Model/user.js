var mongoose = require('mongoose');
const {Schema} = mongoose


const userSchema = new Schema({
    
  name: {
    type: Schema.Types.String,
  },
  userName: {
    type: Schema.Types.String,
  },
  email: {
    type: Schema.Types.String,
  },
  password: {
    type: Schema.Types.String,
  },
  slogan:{
    type: Schema.Types.String,
  },
  aboutMe:{
    type: Schema.Types.String,
  },
  myCity:{
    type: Schema.Types.String,
  },
  myStateProvince:{
    type: Schema.Types.String,
  },
  myCountry:{
    type: Schema.Types.String,
  },
  socialMedia:[{
    facebook:{type: Schema.Types.String},
    instagram:{type: Schema.Types.String},
    twitter:{type: Schema.Types.String},
    pinterest:{type: Schema.Types.String},
    youtube:{type: Schema.Types.String},
    rss:{type: Schema.Types.String},
  }],
  avatarUrl:{
    type: Schema.Types.String,
  },
  post: [
    {
      trip: {
        type: Schema.Types.ObjectId,
        ref: 'Posts',
      }
    }
  ]
  },
    
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);
