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
  // add user brief description and slogan
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
