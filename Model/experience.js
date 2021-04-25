const mongoose = require('mongoose');
const {Schema} = mongoose;


const experiencesSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    
    country: {
        type: String,
        require: true
    },
    tags: [{
        imgUrl: {
            type: Object, required: true
        }
    }],
    story: {
        type: String,
        require: true
    },
    images: [{
        imgUrl: {
            type: Object, required: true
        }
    }],
    comments: [
        {
          comment: {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
          }
        }
    ],
    user: {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    }
},
{
    timestamps: true
  }
)

module.exports = mongoose.model('Experiences', experiencesSchema);