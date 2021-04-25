const mongoose = require('mongoose');
const {Schema} = mongoose;


const commentsSchema = new Schema({
    comment: {
        type: String,
        require: true
    },
    users: {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    },
    
},
{
    timestamps: true
  }
)

module.exports = mongoose.model('Comments', commentsSchema);