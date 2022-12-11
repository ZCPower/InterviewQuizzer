const { Client } = require('pg');
const dotenv = require('dotenv').config();
// imports the pg module



const DB_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/quizler'

// supply the db name and location of the database
const client = new Client(DB_URL);


module.exports = {
    client,
}