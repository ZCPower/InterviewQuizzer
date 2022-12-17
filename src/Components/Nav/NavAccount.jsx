import React, { useState } from 'react'
import AccountDropDown from './AccountDropDown'


function NavAccount() {

  const [accountOpen, setAccountOpen] = useState(false)

  const accountDropdown = () => {

  }

  const toggleDropdown = () => {
    setAccountOpen(prevState => !prevState)
  }

  // const dropdownLeave = () => {
  //   setAccountOpen(false)
  // }

  return (
    <div > <li className=' hover:text-midOrange flex justify-evenly gap-2 items-center' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>Account <img className='h-6' src='https://cdn-icons-png.flaticon.com/128/3033/3033143.png' ></img></li>
    </div>

  )
}

export default NavAccount