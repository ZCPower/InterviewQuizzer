import React, { useState, useEffect } from 'react'
import { Link, useOutletContext, useNavigate, redirect } from 'react-router-dom';
import { loginUser } from '../../api/users';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { errorMessage, successMessage, token, setToken, setUser } = useOutletContext();

    function handleNameChange(e) {
        e.preventDefault();
        //is this even necessary on non-submitting events?

        setUsername(e.target.value)
    }

    function handlePassChange(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    async function handleLoginSubmit(e) {
        e.preventDefault();


        try {
            loginUser(username, password)
                .then((results) => {
                    if (!results.user) {
                        errorMessage(results.message)
                    }
                    else {
                        localStorage.setItem("jwt", results.token);
                        localStorage.setItem('user', JSON.stringify(results.user))
                        setUser(results.user)
                        setToken(results.token)
                        console.log(results)
                        successMessage(results.message)
                        navigate('/browse')
                    }
                })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div id='regContainer' className='flex w-full h-full justify-center
        items-center'>
            {/* border or not? */}
            <form id='regForm' onSubmit={handleLoginSubmit} className='h-1/2 w-2/3 xl:w-1/2 flex flex-col items-center bg-gray justify-between rounded-2xl '>
                <div className='bg-white text-midOrange font-quicksand text-xl md:text-2xl 2xl:text-3xl w-full h-1/6 text-center flex justify-center items-center rounded-t-2xl'>
                    <h2>Login</h2>
                </div>

                <div className='flex flex-col justify-evenly w-3/4 h-1/2 gap-2'>
                    {/* Row 1 */}
                    {/* <div className='flex flex-col gap-4'> */}
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold text-sm md:text-base'>Username</label>
                        <input className='text-base md:text-lg p-1 md:p-2' placeholder='Enter your username' onChange={handleNameChange}
                        ></input>
                    </div>



                    {/* Row 2 */}
                    {/* <div className='flex flex-col justify-between w-3/4'> */}
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold text-sm md:text-base'>Password</label>
                        <input type='password' className='text-base md:text-lg p-1 md:p-2' placeholder='Enter your password' onChange={handlePassChange}></input>
                    </div>

                    {/* </div> */}
                </div>
                <div className='mb-4 md:mb-10 text-center flex flex-col gap-4'>
                    <button className='bg-midOrange text-white  p-2 text-base md:p-3 2xl:text-lg font-quicksand '>Login!</button>
                    <p className='text-base'>Don't have an account? Register <Link to='/register' className='text-orange underline'>here!</Link></p>
                </div>
            </form>
        </div >
    )
}

export default Login