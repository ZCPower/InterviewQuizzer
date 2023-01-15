import React, { useEffect, useState } from 'react'
import { fetchDeckByUser } from '../../api/decks'
import { useOutletContext } from 'react-router-dom';
import DeckPreview from '../Browse/DeckPreview';


function MyDecks() {
    const { user } = useOutletContext();
    const [myDecks, setMyDecks] = useState([]);


    useEffect(() => {
        async function fetchMyDecks() {
            try {
                await fetchDeckByUser(user.id)
                    .then((result) => {
                        console.log(result)
                        setMyDecks(result)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyDecks();
    }, [user]
    )

    let myMappedDecks = myDecks.map((x) => {
        return (
            <DeckPreview creatorId={x.creatorId} topic={x.topic} creatorName={x.creatorName} deckId={x.id} />


            //     Creator's Profile Picture, amount of terms in the deck.

            //Don't want this info hard coded. I want to create API call that takes creatorId and then finds the user and puts in their name and Photo.

            //     Link to that deck where the user can use flashcards.

            //     Remove duplicates in DB.
            //     */}
        )
    })

    return (
        <div className='w-full h-full flex flex-col gap-2 pt-2 items-center'>
            <h2 className='text-left font-bold text-2xl ml-5 self-start'>{user.username}'s Decks</h2>
            <div className='px-4 xl:px-4 w-full grid grid-cols-2 xl:grid-cols-4 gap-4'>{myMappedDecks}</div>
        </div>
    )
}

export default MyDecks