import { useState } from 'react'

import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ContactsUs from './components/ContactsUs'
import Dashboard from './components/Dashboard'


function App() {
  const router = createBrowserRouter([

    {
      path: '/home',
      element: <Home />
    }
    , {
      path: "/",
      element: <home />
    }, {
      path: "/Contacts",
      element: <ContactsUs />
    }, {
      path: "/Dashboard",
      element: <Dashboard />
    }


  ]




  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
