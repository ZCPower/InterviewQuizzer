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
        element: <StudyHome />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
