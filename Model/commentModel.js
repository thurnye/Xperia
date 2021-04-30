const mongoose = require('mongoose');
const {Schema} = mongoose;


const commentsSchema = new Schema({
    comment: {
        type: String,
        require: true
    },
    userId: { 
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    postId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Posts'
    },
},
{
    timestamps: true
  }
)

module.exports = mongoose.model('Comments', commentsSchema);