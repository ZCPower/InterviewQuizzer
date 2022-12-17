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
            <form id='regForm' onSubmit={handleRegSubmit} className='h-3/4 w-2/3 xl:w-1/2 flex flex-col items-center bg-gray justify-between rounded-2xl '>
                <div className='bg-white text-midOrange font-quicksand text-xl md:text-2xl 2xl:text-3xl w-full h-1/6 text-center flex justify-center items-center rounded-t-2xl'><h2 >Create an account</h2>
                </div>

                <div className='flex flex-col justify-evenly w-3/4 h-1/2 gap-2'>
                    {/* Row 1 */}
                    {/* <div className='flex flex-col gap-4'> */}
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold text-sm md:text-base'>Username</label>
                        <input className='text-base md:text-lg p-1 md:p-2' placeholder='Enter your username' onChange={handleNameChange}
                        ></input>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold text-sm md:text-base'>Email</label>
                        <input type='email' className='text-base md:text-lg p-1 md:p-2' placeholder='Enter your email' onChange={handleEmailChange}></input>
                    </div>
                    {/* </div> */}

                    {/* Row 2 */}
                    {/* <div className='flex flex-col justify-between w-3/4'> */}
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold text-sm md:text-base'>Password</label>
                        <input type='password' className='text-base md:text-lg p-1 md:p-2' placeholder='Enter your password' onChange={handlePassChange}></input>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold text-sm md:text-base'>Confirm Password</label>
                        <input type='password'
                            className='text-base md:text-lg p-1 md:p-2'
                            placeholder='Confirm your password' onChange={handleConfirmPass}></input>
                    </div>
                    {/* </div> */}
                </div>
                <div className='mb-4 md:mb-10 text-center flex flex-col gap-1'>
                    <button className='bg-midOrange text-white  p-2 text-base md:p-3 2xl:text-lg font-quicksand '>Create Account!</button>
                    <p className='text-xs'>Already have an account? Login here!</p>
                </div>
            </form>
        </div >
    )
}

export default Register