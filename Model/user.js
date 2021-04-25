var mongoose = require('mongoose');
const {Schema} = mongoose


const userSchema = new Schema({
    
  name: {
    type: Schema.Types.String,
  },
  userName: {
    type: Schema.Types.String,
  },
  password: {
    type: Schema.Types.Number,
  },
  email: {
    type: Schema.Types.String,
  },
  experience: [
    {
      trip: {
        type: Schema.Types.ObjectId,
        ref: 'Experiences',
      }
    }
  ]
  },
    
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);
