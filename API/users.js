const express = require('express');
const bcrypt = require('bcrypt');
const dotenv = require("dotenv").config();
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const { createUser } = require('../DB/models/users');

userRouter.use((req, res, next) => {
    console.log('We are in the users router.')

    next();
});

userRouter.get("/", (req, res) => {
    res.send("Getting Users");
});

userRouter.post('/register', async (req, res, next) => {
    const { username, password, email, isAdmin, userPhoto } = req.body
    console.log(username, password, email)

    try {
        const user = await createUser({
            username: username,
            password: password,
            email: email,
            isAdmin: isAdmin,
            userPhoto: userPhoto
        })

        res.send(user)
    } catch (error) {
        throw error
    }
})


module.exports = userRouter;