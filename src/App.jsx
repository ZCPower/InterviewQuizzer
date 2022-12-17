import { useState } from 'react'
import './App.css'
import Header from './Components/Nav/Header'
import AllFlashCards from './Components/AllFlashcards'
import Register from './Components/Account/Register'
import Login from './Components/Account/Login'
import Home from './Components/Home'
import Browse from './Components/Browse'
function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  console.log(token, 'token')
  return (
    <div className="App">
      <Header token={token} user={user} />
      {/* <AllFlashCards /> */}
      {/* <Register /> */}
      {/* <Login setToken={setToken} /> */}
      {/* <Browse /> */}
      <Home />
    </div>
  )
}

export default App
