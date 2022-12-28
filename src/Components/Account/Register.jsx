import React, { useState, useEffect } from 'react'
import { registerUser } from '../../api/users';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';



function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigate = useNavigate();
    const { errorMessage, successMessage } = useOutletContext();

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
                        if (result.message === `Thank you for registering, ${username}!`) {
                            successMessage(`${result.user.username} successfully registered.`);
                            navigate('/login')
                        } else {
                            console.log('There was an error.')
                            console.log(result.message)
                            errorMessage(result.message)
                        }
                    })
            }
            else {
                errorMessage('Passwords must match.')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div id='regContainer' className='flex w-full h-full justify-center
        items-center'>
            {/* Form */}
            <form id='regForm' onSubmit={handleRegSubmit} className='h-3/4 w-2/3 xl:w-1/2 flex flex-col items-center bg-gray justify-between rounded-2xl '>
                {/* Form h2 */}
                <div className='bg-white text-midOrange font-quicksand text-xl md:text-2xl 2xl:text-3xl w-full h-1/6 text-center flex justify-center items-center rounded-t-2xl'><h2 >Create an account</h2>
                </div>

                {/* Input Container */}
                <div className='flex flex-col justify-evenly w-3/4 h-1/2 gap-2'>

                    {/* Username*/}
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold text-sm md:text-base'>Username</label>
                        <input className='text-base md:text-lg p-1 md:p-2' placeholder='Enter your username' onChange={handleNameChange}
                        ></input>
                    </div>

                    {/* Email */}
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold text-sm md:text-base'>Email</label>
                        <input type='email' className='text-base md:text-lg p-1 md:p-2' placeholder='Enter your email' onChange={handleEmailChange}></input>
                    </div>


                    {/* Password */}
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold text-sm md:text-base'>Password</label>

                        <input
                            type='password'
                            className='text-base md:text-lg p-1 md:p-2' placeholder='Enter your password'
                            minLength={8}
                            onChange={handlePassChange}></input>
                    </div>

                    {/* Confirm Password */}
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold text-sm md:text-base'>Confirm Password</label>
                        <input
                            type='password'
                            className='text-base md:text-lg p-1 md:p-2'
                            placeholder='Confirm your password'
                            minLength={8}
                            onChange={handleConfirmPass}></input>
                    </div>
                </div>


                {/* Button and Paragraph */}
                <div className='mb-4 md:mb-10 text-center flex flex-col gap-1 xl:gap-3'>
                    <button className='bg-midOrange text-white  p-2 text-base md:p-3 2xl:text-lg font-quicksand '>Create Account!</button>
                    <p className='text-xs xl:text-lg'>Already have an account? Login <Link to='/login' className='text-orange underline'>here!</Link></p>
                </div>
            </form>
        </div >
    )
}

export default Register