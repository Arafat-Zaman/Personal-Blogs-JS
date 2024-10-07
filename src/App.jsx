import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Guest/Home'
import Dashboard from './Admin/Dashboard'
import Add from "./Admin/Add"
import Edit from './Admin/Edit'
import Article from './Guest/Article'
import Login from './Admin/Login'
function App() {
const router =createBrowserRouter([
  {path:"/Admin/Add",element:<Add/>},
  {path:"/Admin/Dashboard",element:<Dashboard/>},
  {path:`/Admin/Edit/:id`,element:<Edit/>},
  {path:`/Article/:id`,element:<Article/>},
  {path:"/",element:<Home/>},
  {path:"/login",element:<Login/>},
])
  return (
    <>
        <RouterProvider router={router}/>
    
    </>
  )
}

export default App
