const asyncHandler = require('express-async-handler')
const Users = require("../models/userModel")

//@desc Register a user
//@route POST /api/user/register
//@access Public
const registerUser = asyncHandler(async (req,res) => {
    const { username, email, password} = req.body
    if( !username || !email || !password){
        res.status(404)
        throw new Error('all fields are required')
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