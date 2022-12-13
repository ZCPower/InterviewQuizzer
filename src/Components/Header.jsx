import React from 'react'

function Header() {
    return (
        <header className='bg-white w-full flex justify-around items-center'>
            <div className='flex'>
                {/* <img className='h-10' src='https://cdn-icons-png.flaticon.com/128/2453/2453718.png'></img> */}
                <h1 className='text-midOrange text-4xl py-2 font-merriweather font-bold'>Quizler</h1>
            </div>
            <nav className='w-1/3'>
                <ul className='text-black flex py-4 text-lg font-oxygen flex justify-evenly'>
                    <li className='hover:text-midOrange flex justify-evenly gap-2 items-center'>Browse <img className='h-7 pt-1' src='https://cdn-icons-png.flaticon.com/128/1092/1092164.png'></img></li>
                    <li className=' hover:text-midOrange flex justify-evenly gap-2 items-center'>Study <img className='h-7 pt-1' src='https://cdn-icons-png.flaticon.com/128/2904/2904859.png'></img></li>
                    <li className=' hover:text-midOrange flex justify-evenly gap-2 items-center'>Account <img className='h-6' src='https://cdn-icons-png.flaticon.com/128/3033/3033143.png'></img></li>
                    {/* <li>Link 4?</li> */}
                </ul>
            </nav>

        </header>
    )
}

export default Header