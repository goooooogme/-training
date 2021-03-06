const {Schema, model} = require('mongoose');

const Post = new Schema({
    title: {
        type: String,
        required: true
    }, 
    messagePrev: {
        type: String,
        required: true
    }, 
    messageFull: {
        type: String,
        required: true
    },
    category: String
})

module.exports = model('Post', Post);