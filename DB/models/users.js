const { client } = require('../client');
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

async function createUser({ username, password, email, isAdmin, userPhoto }) {
    // console.log("trying to create user", username, password, email, isAdmin, userPhoto)
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
    try {
        // console.log(client)
        const {
            rows: [user]
        } = await client.query(
            `
        INSERT INTO users(username, password, email, "isAdmin", "userPhoto")
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (username) DO NOTHING
        RETURNING *;
            `,
            [username, hashedPassword, email, isAdmin, userPhoto]
        );
        // console.log(rows)
        console.log(user)
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createUser
}