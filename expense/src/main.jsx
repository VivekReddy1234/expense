import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import Index from './index.jsx'
import Analytics from './Analytics.jsx'
import { RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:"/",
    element: <Index/>,
    children:[
      {
        path:"",
        element: <App/>
      },
      {
        path:"analytics",
        element:<Analytics/>
      }
    ]
  },
  
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
