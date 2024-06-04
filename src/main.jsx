import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { RouterPlayer } from './router/RouterPlayer.jsx';
import { Provider } from 'react-redux';
import store from './App/store.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <RouterProvider router={RouterPlayer} />
  </Provider>
  </StrictMode>,
)
