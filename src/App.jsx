import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import AllFlashCards from './Components/AllFlashcards'
import Register from './Components/Account/Register'

function App() {


  return (
    <div className="App">
      <Header />
      {/* <AllFlashCards /> */}
      <Register />
    </div>
  )
}

export default App
