import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AccountLoggedIn({ setToken, user }) {
    const [accountOpen, setAccountOpen] = useState(false)

    const accountEnter = () => {
        setAccountOpen(true)
    }

    const accountLeave = () => {
        setAccountOpen(false)
    }

    const logOut = () => {
        setToken('');
        localStorage.clear();

    }

    return (
        <div >
            <li onMouseLeave={accountLeave} onMouseEnter={accountEnter} className='w-full flex justify-evenly gap-2'>
                {user.username}<img className='h-6 self-center' src='https://cdn-icons-png.flaticon.com/128/3033/3033143.png' ></img>


                {accountOpen ? (
                    <ul className='absolute right-30 z-10 flex flex-col pt-12 text-center'>


                        {/* Login Button */}
                        <li onClick={accountLeave} className='border-b-2 border-midOrange py-2 w-40 bg-white hover:text-midOrange'><Link to='account'>My Account</Link></li>

                        {/* Register Button */}
                        <li className='w-full py-2 bg-white hover:text-midOrange'><button onClick={logOut}>Log Out</button></li>
                    </ul>
                ) : null}

            </li>

        </div>
    )
}

export default AccountLoggedIn