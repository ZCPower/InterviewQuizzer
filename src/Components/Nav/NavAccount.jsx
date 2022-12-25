import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function NavAccount() {

  const [accountOpen, setAccountOpen] = useState(false)

  const accountEnter = () => {
    setAccountOpen(true)
  }

  const accountLeave = () => {
    setAccountOpen(false)
  }


  return (
    <div >
      <li onMouseLeave={accountLeave} onMouseEnter={accountEnter} className='w-full flex justify-evenly gap-2'>
        Account<img className='h-6' src='https://cdn-icons-png.flaticon.com/128/3033/3033143.png' ></img>


        {accountOpen ? (
          <ul className='absolute right-30 z-10 flex flex-col pt-12 text-center'>

            {/* Login Button */}
            <li className='border-b-2 border-midOrange py-2 w-40 bg-white hover:text-midOrange'><Link to='login'>Login</Link></li>

            {/* Register Button */}
            <li className='w-full py-2 bg-white hover:text-midOrange'><Link to='register' ><button>Register</button></Link></li>
          </ul>
        ) : null}

      </li>

    </div>

  )
}

export default NavAccount