import React from 'react'

function StudyHome() {
    return (
        <div id='studyHomeContainer' className='w-full h-full flex flex-col justify-evenly items-center'>
            {/* <h2 className='font-bold text-3xl'>Study</h2> */}

            {/* Flashcard decks */}
            {/* modify button text for responsiveness... still need to add icons and such */}
            <div id='flashCardZone' className=' w-1/2 text-center h-1/4 flex flex-col justify-evenly items-center'>
                <h3 className='text-2xl font-bold w-2/3 border-b pb-2'>Flashcards</h3>
                <div className='flex justify-evenly h-2/3 gap-2 xl:gap-0 items-center w-full'>
                    {/* Perhaps just have one button that is My Decks... and be able to add decks from that page... same with all other sections. */}
                    <button className='rounded-2xl bg-black hover:bg-midOrange text-white w-1/2 xl:w-1/3 2xl:w-1/4 text-xl font-bold h-2/3'>Add Deck</button>
                    <button className=' rounded-2xl bg-black hover:bg-midOrange text-white w-1/2 xl:w-1/3 2xl:w-1/4 text-xl font-bold h-2/3'>My Decks</button>
                </div>
            </div>


            {/* if feeling froggy... maybe try a orange or diff color background for each 'zone'. probably looks tacky tho */}
            {/* Multiple Choice */}
            <div id='multipleChoiceZone' className=' w-1/2 text-center h-1/4 flex flex-col items-center justify-evenly'>
                <h3 className='text-2xl font-bold border-b w-1/2 pb-2'>Multiple Choice</h3>
                <div className='flex justify-evenly h-2/3 w-full gap-2 xl:gap-0 items-center'>
                    <button className='rounded-2xl bg-black hover:bg-midOrange text-white w-1/2 xl:w-1/3 2xl:w-1/4 text-xl font-bold h-2/3'>Add Quiz</button>
                    <button className='rounded-2xl bg-black hover:bg-midOrange text-white w-1/2 xl:w-1/3 2xl:w-1/4 text-xl font-bold h-2/3'>My Quizzes</button>
                </div>
            </div>

            {/* Drag n Drop */}
            <div id='multipleChoiceZone' className=' w-1/2 text-center h-1/4 flex flex-col items-center justify-evenly'>
                <h3 className='text-2xl font-bold w-2/3 border-b pb-2'>Multiple Choice</h3>
                <div className='flex justify-evenly h-2/3  gap-2 xl:gap-0 items-center w-full'>
                    <button className='rounded-2xl bg-black hover:bg-midOrange text-white w-1/2 xl:w-1/3 2xl:w-1/4 text-xl font-bold h-2/3'>Add Quiz</button>
                    <button className='rounded-2xl bg-black hover:bg-midOrange text-white w-1/2 xl:w-1/3 2xl:w-1/4 text-xl font-bold h-2/3'>My Quizzes</button>
                </div>
            </div>

        </div>
    )
}

export default StudyHome