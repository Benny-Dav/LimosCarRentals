import React from 'react'
import Navbar from '../components/Navbar'
import LandingCar4 from "../assets/LandingCar4.jpg"
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <section className='h-[100vh] flex flex-col mb-8'>
        <Navbar />
        <div className='h-[100%]'>
          <div className=' w-[100%] h-[95%] rounded-3xl bg-center bg-no-repeat bg-cover pt-[1.5em]' style={{ backgroundImage: `url(${LandingCar4})` }}>
            {/* TEXT */}
            <div className='text-center ml-auto mr-auto flex flex-col justify-center h-[40%] w-[60%] gap-y-[5%]'>
              <h1 className='text-7xl font-bold'>Luxury Limo Hire</h1>
              <h3 className='w-[50%] ml-auto mr-auto text-base text-center font-bold'>We offer professional car rentals and limo services in our range of high-end vehicles</h3>
              <Link to="/fleet"><button className='w-[20%] ml-auto mr-auto font-medium text-sm rounded-md px-6 py-2 bg-gray-800 text-white'>View Fleet</button></Link>
            </div>

          </div>
        </div>
      </section>
  )
}

export default LandingPage