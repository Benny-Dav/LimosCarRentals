import HomePage from './pages/HomePage'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import BenzPage from './pages/BenzPage'

import CarDisplayLayout from './Layout/CarDisplayLayout'



function App() {
 const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/cars",
    element:<CarDisplayLayout/>,
    children:[
      {
      path:"mercedes-benz",
      element:<BenzPage/>
    }
    
  ]
  }
 ])
 return <RouterProvider router = {router}/>
}

export default App
