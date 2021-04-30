const mongoose = require('mongoose');
const {Schema} = mongoose;


const postsSchema = new Schema({
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
        type: Object, 
        required: true
    }],
    story: {
        type: String,
        require: true
    },
    images: [{
        type: Object, required: true
    }],
    comments: [{
        comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comments',
        }
    }],
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
{
    timestamps: true
  }
)

module.exports = mongoose.model('Posts', postsSchema);