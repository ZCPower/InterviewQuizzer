import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function StudyNav() {

    const [studyOpen, setStudyOpen] = useState(false)

    const studyEnter = () => {
        setStudyOpen(true)
    }

    const studyLeave = () => {
        setStudyOpen(false)
    }


    return (
        <div >
            <li onMouseLeave={studyLeave} onMouseEnter={studyEnter} className='w-full flex justify-evenly gap-2'>
                Study<img className='h-6' src='https://cdn-icons-png.flaticon.com/128/3033/3033143.png' ></img>


                {studyOpen ? (
                    <ul className='absolute right-30 z-10 flex flex-col pt-12 text-center'>


                        {/* Login Button */}
                        <li className='border-b-2 border-midOrange py-2 w-40 bg-white hover:text-midOrange'><Link to='myDecks'>My Decks</Link></li>

                        {/* Register Button */}
                        <li className='w-full py-2 bg-white hover:text-midOrange'><Link to='addDeck' ><button>Add Deck</button></Link></li>
                    </ul>
                ) : null}

            </li>

        </div>

    )
}

export default StudyNav