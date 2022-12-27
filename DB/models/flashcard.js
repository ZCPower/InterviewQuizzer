const { client } = require('../client');

async function createNewFlashcard({ front, back, deckId }) {
    try {
        // console.log(client)
        const {
            rows: [flashcard]
        } = await client.query(
            `
        INSERT INTO flashcards(front, back, "deckId")
        VALUES ($1, $2, $3)
        RETURNING *;
            `,
            [front, back, deckId]
        );
        return flashcard;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getFlashCardsByDeck(deckId) {
    //check if public, if not... check that creatorId === userId;

    try {
        const { rows } = await client.query(`
            SELECT * FROM flashcards
            WHERE "deckId" = $1
            `, [deckId]);

        return rows
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

//edit card's front, back, deck? perhaps need to think of a way of attaching card to deck other than deckId? Can a card be a part of multiple decks? Perhaps they can select from their existing decks and place that card in those decks?
async function modifyFlashcard() {

}


//delete flashcard with associated ID.
async function deleteFlashcard() {

}


module.exports = {
    createNewFlashcard,
    getAllFlashcards,
    getFlashCardsByDeck
}