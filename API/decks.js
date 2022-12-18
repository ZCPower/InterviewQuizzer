const express = require('express');
const { createNewDeck } = require('../DB/models/decks')
const deckRouter = express.Router();

deckRouter.get('/', async (req, res, next) => {
    const publicDecks = client.query()
    // This would need to be a DB adapter that queries and finds all public Decks.
    //Need to have another one that checks if user is admin. If admin, can view all decks.
    //could store user as state at top level, pass it down as prop/context to the decks component. 
    //Api call would take the user.isAdmin as a parameter and the API would check that and determine if all decks get displayed or not. (it would be an entirely differnt fetch call on a different component, but just in case user stumbles upon this page.)
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