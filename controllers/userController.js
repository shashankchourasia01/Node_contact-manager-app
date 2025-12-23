const asyncHandler = require('express-async-handler')

//@desc Register a user
//@route POST /api/user/register
//@access Public
const registerUser = asyncHandler(async (req,res) => {
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