import React, { useState, useEffect } from 'react'
import { homeBackgrounds } from '../Assets/photoUrls'
import '../Styles/Home.css'
import Login from './Account/Login'
import '../Styles/Header.css'

function Home() {
    const [imageCounter, setImageCounter] = useState(0)
    const [currentImage, setCurrentImage] = useState(homeBackgrounds[imageCounter]);

    // Create a function that rotates through pictures every 5 seconds...

    return (
        <div id='homeContainer' className='w-full flex items-center justify-evenly' style={{
            // backgroundImage: `url(${currentImage})`
        }}>
            <img className='h-2/3' src={currentImage}></img>
            <div className='w-1/3 border-2 h-2/3 rounded-3xl flex bg-white flex-col text-center justify-evenly'>
                <h2 className='font-bold text-4xl p-2'>Preparing for a technical interview?</h2>

                <h3 className='lg:text-lg font-bold text-midOrange 2xl:text-xl'>This is a platform for developers by developers where you can:</h3>


                <ul className='font-bold lg:text-lg 2xl:text-xl list-disc flex flex-col justify-evenly items-center h-1/3'>
                    <li>Create flashcards!</li>
                    <li>Create Multiple Choice Quizzes!</li>
                    <li>Fill in the blank quizzes!</li>
                </ul>
            </div>
        </div>
    )
}

export default Home