const { client } = require('../client');

async function createNewDeck({ topic, creatorId, isPublic, creatorName }) {
    let currentDate = new Date().toLocaleDateString();

    try {
        const { rows: [deck] } = await client.query(`
            INSERT INTO decks(topic, "creatorId", "dateCreated", "isPublic", "creatorName")
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `, [topic, creatorId, currentDate, isPublic, creatorName]);

        return deck
    } catch (error) {
        console.error(error)
    }
}

//where isPublic === true
async function getAllPublicDecks() {
    try {
        const { rows } = await client.query(`
            SELECT * FROM decks
            WHERE "isPublic" = true;
        `);


        return rows
    } catch (error) {
        console.error(error)
    }
}

//this will be an admin only function
async function getAllDecks() {
    try {

    } catch (error) {

    }
}

//so that users can browse all of their decks.
async function getDecksByUserId(id) {
    try {
        const { rows } = await client.query(`
            SELECT * FROM decks
            WHERE "creatorId" = ${id};
        `);


        return rows
    } catch (error) {
        console.error(error)
    }
}

//delete deck with associated id if userId === creatorId
async function deleteDeck() {

}

//perhaps a function to modify deck? Change it's name and/or whether it is public?
async function modifyDeck() {

}

module.exports = {
    createNewDeck,
    getAllPublicDecks,
    getDecksByUserId
}