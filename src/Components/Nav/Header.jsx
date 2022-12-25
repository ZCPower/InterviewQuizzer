import React from 'react'
import NavAccount from './NavAccount'
import { Link } from 'react-router-dom'

function Header() {
    // add accordion/hamburger icon at smaller viewports...
    return (
        <header className='bg-white w-full flex justify-around items-center border-b-2 border-midOrange'>
            <div className='flex'>

                {/* Link to Home */}
                <Link to=''>
                    <h1 className='text-midOrange text-4xl py-2 font-merriweather font-bold'>Quizler</h1>
                </Link>

            </div>

            <nav className='w-1/3'>
                <ul className='text-black flex py-4 text-lg font-oxygen flex justify-evenly items-center'>

                    {/* //Link to Browse Page */}
                    <li className='hover:text-midOrange flex justify-evenly gap-2 items-center'>Browse <img className='h-7 pt-1' src='https://cdn-icons-png.flaticon.com/128/1092/1092164.png'></img></li>

                    {/* //Link to Study Page */}
                    <Link to='study'>
                        <li className=' hover:text-midOrange flex justify-evenly gap-2 items-center'>Study <img className='h-7 pt-1' src='https://cdn-icons-png.flaticon.com/128/2904/2904859.png'></img></li>
                    </Link>

                    {/* Nav Dropdown Links */}
                    <NavAccount />
                </ul>
            </nav>

        </header>
    )
}

export default Header