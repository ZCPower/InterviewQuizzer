const { client } = require('../client');

async function createNewFlashcard({ front, back, category }) {
    try {
        // console.log(client)
        const {
            rows: [flashcard]
        } = await client.query(
            `
        INSERT INTO flashcards(front, back, category)
        VALUES ($1, $2, $3)
        RETURNING *;
            `,
            [front, back, category]
        );
        return flashcard;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createNewFlashcard
}