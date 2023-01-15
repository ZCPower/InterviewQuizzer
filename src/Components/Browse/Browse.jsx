import React, { useState, useEffect } from 'react'
import { fetchAllPublicDecks } from '../../api/flash'
import DeckPreview from './DeckPreview';
import AddDeck from '../Study/AddDeck';
import { useOutletContext, useNavigate } from 'react-router-dom';

function Browse() {
    const { token } = useOutletContext();

    //remove this if navigation not needed...
    const navigate = useNavigate();

    const [pubDecks, setPubDecks] = useState([]);
    const [creating, setCreating] = useState(false)

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
            <DeckPreview creatorId={x.creatorId} topic={x.topic} creatorName={x.creatorName} deckId={x.id} />


            //     Creator's Profile Picture, amount of terms in the deck.

            //Don't want this info hard coded. I want to create API call that takes creatorId and then finds the user and puts in their name and Photo.

            //     Link to that deck where the user can use flashcards.

            //     Remove duplicates in DB.
            //     */}
        )
    })


    function addDeck() {
        setCreating(prevState => !prevState)
    }
    return (
        <div className='w-full h-full flex flex-col gap-2 pt-2 items-center'>
            <div className='self-start flex gap-10 items-center justify-center'>
                {!creating ? <h2 className='text-left font-bold text-2xl ml-5 self-start'>Browse Public Decks</h2> : <h2 className='text-left font-bold text-2xl ml-5 self-start'>Create Deck</h2>}
                {/* IF TOKEN SHOW BUTTON HERE. */}


                {token ?
                    <button
                        onClick={() => { navigate('/addDeck') }}
                        className='border-2 rounded-lg bg-black text-white px-1 text-xl self-center text-center flex items-center justify-center'>{!creating ? 'Create Deck' : 'Browse Decks'}

                        <span className='text-orange text-2xl ml-2'>{!creating ? '+' : null}</span></button> : null}
            </div>

            {!creating ? <div id='publicDeckContainer' className='px-4 xl:px-4 w-full grid grid-cols-2 xl:grid-cols-4 gap-4'>{mappedDecks}</div> : <AddDeck />}
        </div>
    )
}

export default Browse