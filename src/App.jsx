import HomePage from './pages/HomePage'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import BenzPage from './pages/BenzPage'

import CarDisplayLayout from './Layout/CarDisplayLayout'
import FleetPage from './pages/FleetPage'
import RangeRover from './pages/RangeRover'
import { ToastContainer } from 'react-toastify'



function App() {
 const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/fleet",
    element:<FleetPage/>
   
  },
  {
    path:"/fleet/car",
    element:<CarDisplayLayout/>,
    children:[
      {
        path:"mercedes-benz",
        element:<BenzPage/>
      },
      {
        path:"rangerover",
        element:<RangeRover/>
      }
    ]
  }
 ])
 return (
  <div>
    <RouterProvider router = {router}/>
    <ToastContainer/>
  </div>
 )

}

export default App
