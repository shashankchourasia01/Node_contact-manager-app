const asyncHandler = require('express-async-handler')
const Users = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//@desc Register a user
//@route POST /api/user/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.status(404)
        throw new Error('all fields are required')
    }

    //check that user is already available or not
    const userAvailable = await Users.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("user already register")
    }
    //if user not available then create user with hashing his password using bcrypt library
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("hashed pass: ", hashedPassword);

    //now create user
    const user = await Users.create({
        username,
        email,
        password: hashedPassword
    })
    console.log(`user created" ${user}`);
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    } else {
        res.status(400);
        throw new Error('user data was not valid')
    }


    res.json({ message: "Register the user" })
});

//@desc Login a user
//@route Post /api/user/LOGIN
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const user = await Users.findOne({ email })

    // compare password with hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        // give user to access token.
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }
        }, process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "10m" }
        )
        // if it matches then provide a access token
        res.status(200).json({ accessToken });
    } else {
        res.status(401)
        throw new Error("Email or password is not valid")
    }
});

//@desc current user info
//@route Post /api/user/current
//@access Private
const currentUser = asyncHandler(async (req, res) => {
    //req.user will send me the details of current user which will login at the details is
    //email, username and id
    res.json(req.user)
})

module.exports = { registerUser, loginUser, currentUser }