const express = require('express');
const { getAllFlashcards, createNewFlashcard, getFlashCardsByDeck } = require('../DB/models/flashcard');
const flashRouter = express.Router();

flashRouter.use((req, res, next) => {
    console.log('We are in the flash cards router.')
    next();
});

flashRouter.get('/', async (req, res, next) => {
    try {
        const flashcards = await getAllFlashcards();

        res.send(flashcards)
    } catch (error) {
        next(error)
    }
})

//this route might need a different address/name
flashRouter.post('/create', async (req, res, next) => {
    const { front, back, topic, deckId } = req.body
    try {
        const flashcard = await createNewFlashcard({
            front: front,
            back: back,
            topic: topic,
            deckId: deckId
        })

        res.send(flashcard)
    } catch (error) {
        next(error);
    }
})

//get flashcards by deck... WILL NEED TO BE PARAMS
flashRouter.get('/id', async (req, res, next) => {
    console.log(req.body, 'help')
    const { deckId } = req.body;
    try {
        const flashCards = await getFlashCardsByDeck(deckId);

        res.send(flashCards)
    } catch (error) {
        next(error)
    }
})

module.exports = flashRouter;