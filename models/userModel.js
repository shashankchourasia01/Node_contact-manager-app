const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "add user name"]
    },
    email: {
        type: String,
        required: [true, "add email"],
        unique: [true, "email already registered"]
    },
    password: {
        type: String,
        required: [true, "add password"]
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("user",userSchema);