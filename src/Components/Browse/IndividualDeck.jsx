import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { fetchCardsByDeck } from '../../api/flash';

function IndividualDeck() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState([])
    const [viewFront, setViewFront] = useState(true);

    useEffect(() => {
        async function fetchDeck() {
            try {
                const cards = await fetchCardsByDeck(deckId);
                console.log(cards, 'deck')
                setDeck(cards)
            } catch (error) {

            }
        }
        fetchDeck();
    }, [])


    //Handles flipping card.
    function handleFlip() {
        setViewFront(prevState => !prevState)
    }

    //houses each individual card
    const mappedCards = deck.map((card) => {

        return (
            <div className='border-2 w-2/3 sm:w-1/2 md:w-1/3 h-1/3 rounded-2xl flex justify-center items-center text-2xl' onClick={handleFlip}>
                {viewFront ? <h2 className='font-bold text'>{card.front}</h2> :
                    <h2 className='font-bold text'>{card.back}</h2>}
            </div>
        )
    })

    return (
        <div className='flex items-center justify-center border-midOrange h-full'>{mappedCards}</div>
    )
}

export default IndividualDeck