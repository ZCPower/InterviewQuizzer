import React, { useState, useEffect } from 'react'
import { useOutletContext, useNavigate, Link } from 'react-router-dom';

function MyAccount() {
    const { user } = useOutletContext();
    console.log(user)
    //ADD A MEMBER SINCE SECTION/PARAGRAPH AND ADD IT TO DB for when user was created (like i did with decks)
    return (
        <div id='accountContainer' className='w-full h-full flex flex-col justify-center items-center'>
            <div className='border font-bold bg-white h-1/2 w-1/5 flex flex-col justify-center items-center rounded-xl'><h2 className='text-2xl'>{user.username}'s Account</h2>
                <img className='rounded-2xl border-2 w-1/3 max-h-48' src={user.userPhoto}></img>
                <div className='grid grid-cols-2 gap-2 mt-2'>
                    <Link to='/myDecks'><button className='bg-gray rounded-lg'>My Decks</button></Link>
                    <button className='bg-gray rounded-lg'>Log Out</button>
                    <button className='bg-gray rounded-lg'>Delete Account</button>
                </div>

            </div>
        </div>
    )
}

export default MyAccount