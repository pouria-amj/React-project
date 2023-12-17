
import {   RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import WelcomPage from './Pages/WelcomPage1'
import { FC } from 'react'
import WelcomPage2 from './Pages/Welcompage2'
import WelcomPage3 from './Pages/welcomepage3'
import WelcomPage4 from './Pages/WelcomePage4'
import RegisterPage from './Pages/RegisterPage'
import LogIn from './Pages/Login'
import ProfileLayout from './Components/ProfileLayout'
import Profile from './Pages/Profile'

const router = createBrowserRouter([
{ 
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/welcome1",
      element:<WelcomPage/>
    },
    {
      path:"/welcome2",
      element:<WelcomPage2/>
    },
    {
      path:"/welcome3",
      element:<WelcomPage3/>
    },
    {
      path:"/welcome4",
      element:<WelcomPage4/>
    },
    {
      path:"/register",
      element:<RegisterPage/>
    },
    {
      path:"/login",
      element:<LogIn/>
    }
  ],
},
  {
    path:"/user",
    element:<ProfileLayout/>,
    children: [
      {
        path: "/user/profile",
        element:<Profile/>
      }
    ]
  }
])

const App : FC=()=> {

  return (
    <RouterProvider router={router}/>
  

  )
}

export default App