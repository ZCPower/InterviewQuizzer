import React, { useState, useEffect } from 'react'
import './App.css'

//React Router
import { Outlet } from "react-router-dom";

//Component Imports
import Header from './Components/Nav/Header'


//Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const tokenFromStorage = localStorage.getItem("jwt");
  const [token, setToken] = useState(tokenFromStorage);


  const [user, setUser] = useState({});
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);
  //Might need to tinker with this. On render, check token and then generate user that way?


  const errorMessage = (message) => toast.error(message)
  const successMessage = (message) => toast.success(message)
  return (
    <div className="App">

      <Header token={token} user={user} setToken={setToken} setUser={setUser} />
      <Outlet context={{
        errorMessage,
        successMessage,
        token,
        setToken,
        user,
        setUser
      }} />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
    </div>
  )
}

export default App
