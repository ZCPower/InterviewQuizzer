const express = require('express');
const dotenv = require("dotenv").config();
const apiRouter = express.Router();
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const { createUser } = require('../DB/models/users')


const userRouter = require('./users');
apiRouter.use('/users', userRouter)

const flashRouter = require('./flashcards');
apiRouter.use('/flash', flashRouter)

module.exports = apiRouter;