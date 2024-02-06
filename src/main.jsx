import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Portfolio from './routes/Portfolio'
import App from './App'
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "projects",
          element: <Portfolio />
        }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
