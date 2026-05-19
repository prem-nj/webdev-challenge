import { useState } from 'react'

import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import ContactsUs from './components/ContactsUs'
import Dashboard from './components/Dashboard'
import Navbarbar from './components/Navbarbar'
import About from './components/About'


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
    },{
      path:"/about",
      element:<About/>
    }
  ]
  )
  return (
<div>
  <Navbarbar/>

  <RouterProvider router={router} />
</div>

  )
}

export default App
