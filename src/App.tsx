
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
import HomeLayout from './Components/HomeLayout'
import HomePage from './Pages/HomePage'
import NotificationPage from './Pages/Notfication'
import TopDoc from './Pages/TopDoc'
import DrInfo from './Pages/DrInfo'
import Reviews from './Pages/Reviews'
import Appointment from './Pages/Appointment'
import Payment from './Pages/Payment'
import AddCard from './Pages/NewCard'
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
  },
  {
    path:"/home",
    element:<HomeLayout/>,
    children:[
      {
path:"/home/homepage",
element:<HomePage/>
      },
      {
        path:"/home/noitif",
        element:<NotificationPage/>
      },
      {
        path:"/home/top",
        element:<TopDoc/>
      },
      {
        path:"/home/info",
        element:<DrInfo/>
      },
      {
        path:"/home/reviwes",
        element:<Reviews/>
      },
      {
        path:"/home/appointment",
        element:<Appointment/>
      },
      {
        path:"/home/payment",
        element:<Payment/>
      },
      {
        path:"/home/addcart",
        element:<AddCard/>
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