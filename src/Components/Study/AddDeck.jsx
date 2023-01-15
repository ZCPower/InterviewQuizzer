import React, { useState } from 'react'
import { Checkbox, CheckboxProps, CheckboxStylesType } from "@material-tailwind/react";
import { createDeck } from '../../api/decks';
import { useOutletContext, useNavigate } from 'react-router-dom';

function AddDeck() {
    const { user, token } = useOutletContext();
    console.log(user)

    const [isPublic, setIsPublic] = useState(false);
    const [topic, setTopic] = useState('')

    const navigate = useNavigate();

    function setPublic() {
        setIsPublic(prevState => !prevState)
    }

    function handleTopicChange(e) {
        e.preventDefault();
        setTopic(e.target.value)
    }

    function submitDeck(e) {
        e.preventDefault()
        console.log(topic.length)
        if (topic.length > 0) {
            createDeck(topic, isPublic, user.id, user.username)
            console.log('SUBMITT')
            navigate('/browse')
        }
        console.log('hello?')
    }
    //take creatorName and creatorId from userObject.
    return (
        <div className='w-full h-full flex flex-col justify-start gap-2 items-start pt-2'>
            <h2 className='text-left font-bold text-2xl ml-5 self-start'>Create Deck</h2>
            <form className='flex border flex-col items-center justify-center gap-4 w-full h-1/2'>

                <div className='flex flex-col items-center gap-2 w-1/3'>
                    <label className='font-bold'>Topic:</label>
                    <input onChange={handleTopicChange} className='w-full text-2xl' maxLength={30}></input>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <label className='font-bold'>Public?</label>
                    <input onClick={setPublic} type='checkbox' className='accent-midOrange h-8 w-8' ></input>
                </div>
                <button className='bg-black text-white px-3 py-1 text-xl rounded-lg' onClick={submitDeck}>Create</button>
                {/* ON CLICK, if creation was successful: navigate to myDecks or something. 
                Perhaps go to that Deck and be able to add/view flashcards?
                */}
            </form>
        </div>
    )
}

export default AddDeck