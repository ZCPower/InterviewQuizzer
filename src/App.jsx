import { useState } from 'react'
import './App.css'
import Header from './Components/Nav/Header'
import AllFlashCards from './Components/Study/AllFlashcards'
import Register from './Components/Account/Register'
import Login from './Components/Account/Login'
import Home from './Components/Home'
import Browse from './Components/Browse'
import StudyHome from './Components/Study/StudyHome'
function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  console.log(token, 'token')
  return (
    <div className="App">
      {/* ORGANIZE THIS SHIT ONCE ROUTER IS SET UP CAUSE GOD DAMN. */}
      <Header token={token} user={user} />
      {/* <AllFlashCards /> */}
      {/* <Register /> */}
      {/* <Login setToken={setToken} /> */}
      {/* <Browse /> */}
      <StudyHome />
      {/* <Home /> */}
    </div>
  )
}

export default App
