import React from 'react'
import NavAccount from './AccountLoggedOut'
import { Link } from 'react-router-dom'
import AccountLoggedIn from './AccountLoggedIn'
import StudyNav from './StudyNav'

function Header({ token, setToken, user }) {
    // add accordion/hamburger icon at smaller viewports...
    return (
        <header className='bg-white w-full flex justify-around items-center border-b-2 border-midOrange'>
            <div className='flex'>

                {/* Link to Home */}
                <Link to=''>
                    <h1 id='logo' className='text-midOrange text-4xl py-2 font-merriweather font-bold'>Quizler</h1>
                </Link>

            </div>

            <nav className='w-1/3'>
                <ul className='text-black flex py-4 text-lg font-oxygen flex justify-evenly items-center'>

                    {/* //Link to Browse Page */}
                    <Link to='browse'>
                        <li className='hover:text-midOrange flex justify-evenly gap-2 items-center'>Browse <img className='h-7 pt-1' src='https://cdn-icons-png.flaticon.com/128/1092/1092164.png'></img></li>
                    </Link>

                    {/* //Link to Study Page */}
                    {token ?
                        <StudyNav />
                        : null}

                    {/* Nav Dropdown Links */}
                    {token ? <AccountLoggedIn setToken={setToken} user={user} /> : <NavAccount />}
                </ul>
            </nav>

        </header>
    )
}

export default Header