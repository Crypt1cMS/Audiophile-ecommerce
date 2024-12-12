import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router' 
import './global.css'
import HomePage from './pages/homepage'
import Headphones from './pages/headphones' 
import Earphones from './pages/earphones'
import Speakers from './pages/speakers'
import NotFound404 from './pages/notfound404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound404 />,
  },
  {
    path: '/headphones',
    element: <Headphones />,
    errorElement: <NotFound404 />,
  },
  {
    path: '/earphones',
    element: <Earphones />,
    errorElement: <NotFound404 />,
  },
  {
    path: '/speakers',
    element: <Speakers />,
    errorElement: <NotFound404 />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
