import React, { useState } from 'react'

function AddDeck() {
    const [isPublic, setIsPublic] = useState(false)
    //take creatorName and creatorId from userObject.
    return (
        <div className='w-1/2 h-full flex justify-center items-center'>
            <form className='flex border flex-col items-center gap-4 w-full'>
                <div className='flex flex-col items-center gap-2'>
                    <label className='font-bold'>Topic:</label>
                    <input className=''></input>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <label className='font-bold'>Public?</label>
                    <input className='' type='checkbox'></input>
                </div>
                <button className='bg-black text-white px-3 py-1 text-xl rounded-lg'>Create</button>
            </form>
        </div>
    )
}

export default AddDeck