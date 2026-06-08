import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home'
import ContactsUs from './components/ContactsUs'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import About from './components/About'
import UserId from './components/UserId'
import NotFound from './components/NotFound'

function App() {

  const router = createBrowserRouter([
    {
      path: '/home',
      element:
        <div>
          <Navbar />
          <Home />
        </div>
    },
    {
      path: '/',
      element:
        <div>

          <Navbar />
          <Home />
        </div>
    },
    {
      path: '/contacts',
      element:
        <div>
          <Navbar />
          <ContactsUs />
        </div>


    },
    {
      path: '/dashboard',
      element:
        <div>
          <Navbar />
          <Dashboard />
        </div>
    },
    {
      path: '/about',
      element:
        <div>
          <Navbar />
          <About />
        </div>

    }, {
      path: '/home/:id',
      element:
        <div>
          <Navbar />
          <UserId />
        </div>
    }, {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <div>

      <RouterProvider router={router} />
    </div>
  )
}

export default App