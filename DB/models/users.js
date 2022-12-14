const { client } = require('../client');
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

async function createUser({ username, password, email, isAdmin, userPhoto }) {
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
    try {
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

        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getUserById(userId) {
    try {
        const {
            rows: [user],
        } = await client.query(`
        SELECT id, username, password, email, "isAdmin", "userPhoto"
        FROM users
        WHERE id=${userId}
        `);

        if (!user) {
            return null;
        }
        delete user.password;
        return user;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

async function getAllUsers() {
    try {
        const { rows } = await client.query(`
        SELECT id, username, email, "isAdmin", "userPhoto"
        FROM users
    `);
        return rows
    } catch (error) {
        console.error(error)
        throw error;
    }
}

async function getUserByUsername(username) {
    console.log('username by username', username)
    try {
        const { rows: [user] } = await client.query(`
        SELECT * from users
        WHERE username = $1
        ;`, [username])

        return user
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    getUserByUsername
}