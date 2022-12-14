const { client } = require('../client');

async function createNewFlashcard({ front, back, topic, deckId }) {
    try {
        // console.log(client)
        const {
            rows: [flashcard]
        } = await client.query(
            `
        INSERT INTO flashcards(front, back, topic, "deckId")
        VALUES ($1, $2, $3, $4)
        RETURNING *;
            `,
            [front, back, topic, deckId]
        );
        return flashcard;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getAllFlashcards() {
    try {
        const {
            rows
        } = await client.query(`
            SELECT * FROM flashcards;
        `)
        return rows
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createNewFlashcard,
    getAllFlashcards,

}