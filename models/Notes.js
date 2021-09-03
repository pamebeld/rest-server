const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: true
    }
});


module.exports = model('Notes', UserSchema);