import React, { useState, useEffect } from 'react'
import { fetchAllPublicDecks } from '../../api/flash'
import DeckPreview from './DeckPreview';

function Browse() {
    const [pubDecks, setPubDecks] = useState([]);

    useEffect(() => {
        async function fetchPublicDecks() {
            try {
                await fetchAllPublicDecks()
                    .then((result) => {
                        console.log(result)
                        setPubDecks(result)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchPublicDecks();
    }, []
    )

    let mappedDecks = pubDecks.map((x) => {
        return (
            <DeckPreview creatorId={x.creatorId} topic={x.topic} creatorName={x.creatorName} />


            //     Creator's Profile Picture, amount of terms in the deck.

            //Don't want this info hard coded. I want to create API call that takes creatorId and then finds the user and puts in their name and Photo.

            //     Link to that deck where the user can use flashcards.

            //     Remove duplicates in DB.
            //     */}
        )
    })

    return (
        <div className='w-full h-full flex flex-col gap-2 pt-2 items-center'>
            <h2 className='text-left font-bold text-xl ml-5 self-start'>Browse Public Decks</h2>

            <div id='publicDeckContainer' className='px-4 xl:px-4 w-full grid grid-cols-2 xl:grid-cols-4 gap-4'>{mappedDecks}</div>
        </div>
    )
}

export default Browse