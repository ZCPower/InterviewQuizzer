import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css';
import Header from './Components/Nav/Header';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import StudyHome from './Components/Study/StudyHome';
import Login from './Components/Account/Login';
import Register from './Components/Account/Register';
import MyDecks from './Components/Study/MyDecks';
import MyAccount from './Components/Account/MyAccount';
import Browse from './Components/Browse/Browse';
import IndividualDeck from './Components/Browse/IndividualDeck';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      }, {
        path: 'study',
        element: <StudyHome />,
        children: [
          // {
          //   path: 'myDecks',
          //   element: <MyDecks />
          // }
        ]
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'myDecks',
        element: <MyDecks />
      }, {
        path: 'account',
        element: <MyAccount />
      },
      {
        path: 'browse',
        element: <Browse />
      },
      {
        path: 'decks/:deckId',
        element: <IndividualDeck />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
