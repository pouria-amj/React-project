
import {   RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import WelcomPage from './Pages/WelcomPage1'
import { FC } from 'react'
import WelcomPage2 from './Pages/Welcompage2'
import WelcomPage3 from './Pages/welcomepage3'
import WelcomPage4 from './Pages/WelcomePage4'

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