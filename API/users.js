const express = require('express');
const bcrypt = require('bcrypt');
const dotenv = require("dotenv").config();
const userRouter = express.Router();
const jwt = require('jsonwebtoken');

userRouter.use((req, res, next) => {
    console.log('We are in the users router.')

    next();
});

module.exports = userRouter;