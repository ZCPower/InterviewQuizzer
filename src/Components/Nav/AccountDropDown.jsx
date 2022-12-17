import React from 'react'

function AccountDropDown() {
    return (
        <div> <ul id='techMenu' className='absolute z-10'>
            <li> <button className='w-full bg-midpurple hover:bg-darkpurple'>Add Techs</button></li>
            <li><button className='bg-midpurple hover:bg-darkpurple'>Edit/Remove Techs</button></li>
        </ul></div>
    )
}

export default AccountDropDown