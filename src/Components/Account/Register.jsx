import React, { useState, useEffect } from 'react'
import { registerUser } from '../../api/users';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    function handleNameChange(e) {
        e.preventDefault();
        //is this even necessary on non-submitting events?

        setUsername(e.target.value)
    }

    function handleEmailChange(e) {
        e.preventDefault();
        setEmail(e.target.value)
    }

    function handlePassChange(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    function handleConfirmPass(e) {
        e.preventDefault(e);
        setConfirmPass(e.target.value)
    }

    async function handleRegSubmit(e) {
        e.preventDefault();

        try {
            if (password === confirmPass) {
                await registerUser(username, email, password)
                    .then((result) => {
                        console.log(result)
                        if (result.message === 'Thank you for registering') {
                            console.log(`${result.user.username} successfully registered, proceed to login.`)
                        } else {
                            console.log(result.message)
                            //Unexpected end to JSON input when the user already exists... look into this.
                        }
                    })
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div id='regContainer' className='flex w-full h-full justify-center
        items-center'>
            {/* border or not? */}
            <form id='regForm' onSubmit={handleRegSubmit} className='h-3/4 w-1/2 flex flex-col items-center bg-gray justify-between'>
                <div className='bg-white text-midOrange font-quicksand text-3xl w-full h-1/6 text-center flex justify-center items-center'><h2 >Create an account</h2>
                </div>

                {/* Row 1 */}
                <div className='flex justify-between w-3/4'>

                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Username</label>
                        <input className='text-lg p-1' placeholder='Enter your username' onChange={handleNameChange}
                        ></input>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Email</label>
                        <input type='email' className='text-lg p-1' placeholder='Enter your email' onChange={handleEmailChange}></input>
                    </div>
                </div>

                {/* Row 2 */}
                <div className='flex justify-between w-3/4'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Password</label>
                        <input type='password' className='text-lg p-1' placeholder='Enter your password' onChange={handlePassChange}></input>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Confirm Password</label>
                        <input type='password'
                            className='text-lg p-1'
                            placeholder='Confirm your password' onChange={handleConfirmPass}></input>
                    </div>
                </div>

                <button className='bg-midOrange text-white p-3 text-lg font-quicksand mb-4'>Create Account!</button>
            </form>
        </div >
    )
}

export default Register