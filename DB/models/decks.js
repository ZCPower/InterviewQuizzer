const { client } = require('../client');

async function createNewDeck({ topic, creatorId, dateCreated }) {
    try {
        const { rows: [deck] } = await client.query(`
            INSERT INTO decks(topic, "creatorId", "dateCreated")
            VALUES ($1, $2, $3)
            RETURNING *;
        `, [topic, creatorId, dateCreated]);

        return deck
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createNewDeck
}