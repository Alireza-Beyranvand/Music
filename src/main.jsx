import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { RouterPlayer } from './router/RouterPlayer.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={RouterPlayer} />
  </StrictMode>,
)
