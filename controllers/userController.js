const asyncHandler = require('express-async-handler')
const Users = require("../models/userModel")
const bcrypt = require('bcrypt')

//@desc Register a user
//@route POST /api/user/register
//@access Public
const registerUser = asyncHandler(async (req,res) => {
    const { username, email, password} = req.body
    if( !username || !email || !password){
        res.status(404)
        throw new Error('all fields are required')
    }
    const userAvailable = await Users.findOne({email});
    if( userAvailable){
        res.status(400);
        throw new Error("user already register")
    }
    //if user not available then create user with hashing his password using bcrypt library
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("hashed pass: ",hashedPassword);

    //now create user
    const user = await Users.create({
        username,
        email,
        password: hashedPassword
    })
    console.log(`user created" ${user}`);
    if(user){
        res.status(201).json({ _id: user.id, email: user.email})
    } else{
        res.status(400);
        throw new Error('user data was not valid')
    }
    

    res.json({ message: "Register the user"})
});

//@desc Login a user
//@route Post /api/user/LOGIN
//@access Public
const loginUser = asyncHandler( async (req,res) => {
    res.json({ message: "Login a user"})
});

//@desc current user info
//@route Post /api/user/current
//@access Private
const currentUser = asyncHandler( async (req,res) => {
    res.json({ message: "Current user info"})
})

module.exports = {registerUser,loginUser, currentUser}