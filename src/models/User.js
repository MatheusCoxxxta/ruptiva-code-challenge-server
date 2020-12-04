const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
})

mongoose.model("User", UserSchema);
