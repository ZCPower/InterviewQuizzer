const express = require('express');
const { createNewDeck, getAllPublicDecks } = require('../DB/models/decks')
const deckRouter = express.Router();

deckRouter.get('/', async (req, res, next) => {

    try {
        const deckList = await getAllPublicDecks();

        res.send(deckList);
    }
    catch (error) {
        next(error)
    }
})


deckRouter.post('/create', async (req, res, next) => {
    const { topic, isPublic, creatorId } = req.body
    try {
        const deck = await createNewDeck({
            topic: topic,
            isPublic: isPublic,
            creatorId: creatorId,

        })

        res.send(deck)
    } catch (error) {
        next(error);
    }
})

module.exports = deckRouter;