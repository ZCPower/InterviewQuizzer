const express = require('express');
const bcrypt = require('bcrypt');
const dotenv = require("dotenv").config();
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const { createUser, getAllUsers, getUserById, getUserByUsername } = require('../DB/models/users');

userRouter.use((req, res, next) => {
    console.log('We are in the users router.')

    next();
});

//get all users
userRouter.get("/", async (req, res) => {
    const users = await getAllUsers()
    console.log(users)
    res.send(users);
});

//Register
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


        console.log(user)
        res.send(user)
    } catch (error) {
        next(error)
    }
})

//get user by id
userRouter.get('/:userId', async (req, res, next) => {
    const { userId } = req.params
    console.log('getting user with id', userId)
    console.log(userId)
    console.log(req.params)
    try {
        const user = await getUserById(userId)
        res.send(user)
    } catch (error) {
        next(error)
    }
})

//login 
userRouter.post('/login', async (req, res, next) => {
    const { username, password } = req.body;
    console.log(req.body);
    console.log('username', username, 'password', password)

    if (!username || !password) {
        console.log('Username or password is missing.');
        res.send('Username or password is missing.')
    }

    try {
        console.log('good here?')
        const user = await getUserByUsername(username);
        if (user) {

            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                res.send({ message: "Username and password combination is incorrect." })
            } else {
                const token = jwt.sign(
                    {
                        id: user.id,
                        username: user.username
                    },
                    'your mom'
                    //replace this with process.env.JWT_SECRET later.
                );
                const confirmation = {
                    message: `You have successfully logged in, ${username}`,
                    token: token,
                    user: user
                };
                delete confirmation.user.password;
                res.send(confirmation)
            }
        }
    } catch (error) {
        next(error)
    }
})


module.exports = userRouter;