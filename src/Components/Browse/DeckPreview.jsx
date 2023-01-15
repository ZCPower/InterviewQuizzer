import React, { useState, useEffect } from 'react'
// import { getUserByBody } from '../../api/users'
import { Link } from 'react-router-dom'

function DeckPreview({ topic, creatorId, creatorName, deckId }) {
    // console.log(creatorId, 'creatorId')

    const [creator, setCreator] = useState({})

    // const creationPerson = async () => {
    //     await getUserByBody(creatorId)
    //         .then((result) => {
    //             console.log(result)
    //             setCreator(result)
    //         })
    // }

    // creationPerson()

    useEffect(() => {
        async function getUserInfo() {
            try {
                // await getUserByBody(creatorId)
                //     .then((result) => {
                //         console.log(result)
                //         setCreator(result)
                //     })
            } catch (error) {
                console.log(error)
            }
        }
        getUserInfo();
    }, []
    )

    // console.log(creator)

    return (

        <div className='bg-white flex flex-col p-4 gap-y-5 border-b-8 border-b-white hover:border-b-orange transition duration-500 ease-out hover:ease-in'>
            <Link to={`/decks/${deckId}`}>
                <div>
                    <h3 className='text-orange text-xl'>{topic}</h3>
                    <p className='text-black'>#69 Terms</p>
                </div>
            </Link>
            <Link to={`/login`} className='underlineAfterHover'>
                <h4 className='text-orange text-lg'>{creatorName}</h4>
            </Link>
            {/* I would like to see....
                
                Creator's Profile Picture, amount of terms in the deck.

                Link to that deck where the user can use flashcards.

                Remove duplicates in DB.
                */}

        </div >
    )
}

export default DeckPreview