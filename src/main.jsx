import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './reduxStore/Store.js'
import Home from './components/Home.jsx'
import Bookmark from './components/Bookmark.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/", 
  element: <App/>,
  children: [
    {path:"", element: <Home/>},
    {path:"/Bookmarks/:id", element: <Bookmark/>},
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
