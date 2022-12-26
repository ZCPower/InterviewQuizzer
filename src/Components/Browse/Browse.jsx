import React, { useState, useEffect } from 'react'
import { fetchAllPublicDecks } from '../../api/flash'

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
            <div className='bg-white flex flex-col p-4 gap-y-5 border-b-8 border-b-white hover:border-b-orange transition duration-500 ease-out hover:ease-in'>
                <div>
                    <h3 className='text-orange text-xl'>{x.topic}</h3>
                    <p className='text-black'>#69 Terms</p>
                </div>
                <h4 className='text-orange text-lg'>Creator</h4>
                {/* I would like to see....
                
                Creator's Profile Picture, amount of terms in the deck.

                Link to that deck where the user can use flashcards.

                Remove duplicates in DB.
                */}
            </div>
        )
    })

    return (
        <div className='w-full h-full flex flex-col gap-2 pt-2 items-center'>
            <h2 className='text-center font-bold text-xl'>Browse Public Decks</h2>

            <div id='publicDeckContainer' className='px-2 xl:px-4 w-full grid grid-cols-2 xl:grid-cols-4 gap-2'>{mappedDecks}</div>
        </div>
    )
}

export default Browse