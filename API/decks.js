const express = require('express');
const { createNewDeck, getAllPublicDecks } = require('../DB/models/decks');
const { getFlashCardsByDeck, } = require('../DB/models/flashcard');
const { getDecksByUserId } = require('../DB/models/decks');
const deckRouter = express.Router();

deckRouter.use((req, res, next) => {
    console.log('We are in the deck router.')

    next();
});

deckRouter.get('/', async (req, res, next) => {

    try {
        const deckList = await getAllPublicDecks();

        res.send(deckList);
    }
    catch (error) {
        next(error)
    }
})


deckRouter.post('/', async (req, res, next) => {
    const { topic, isPublic, creatorId, creatorName } = req.body
    try {
        const deck = await createNewDeck({
            topic: topic,
            isPublic: isPublic,
            creatorId: creatorId,
            creatorName: creatorName
            //Perhaps add creator photo, but how do we edit that later. Would be better to have that be an api call, probably. Same with Name.

        })

        res.send(deck)
    } catch (error) {
        next(error);
    }
});

//get flashcards by deck...through params
deckRouter.get('/:deckId', async (req, res, next) => {
    console.log(req.params)
    const { deckId } = req.params
    try {
        const deck = await getFlashCardsByDeck(deckId);
        res.send(deck);
    } catch (error) {
        next(error)
    }
})

deckRouter.get('/user/:userId', async (req, res, next) => {
    console.log(req.params)
    const { userId } = req.params
    try {
        const deck = await getDecksByUserId(userId);
        res.send(deck);
    } catch (error) {
        next(error)
    }
})




module.exports = deckRouter;