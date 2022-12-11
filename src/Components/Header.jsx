import React from 'react'

function Header() {
    return (
        <header className='bg-midOrange w-full flex justify-around items-center'>
            <h1 className='text-white text-3xl py-2 font-merriweather '>Quizler</h1>
            <nav>
                <ul className='text-white flex p-2 gap-x-5 text-l'>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </nav>

        </header>
    )
}

export default Header