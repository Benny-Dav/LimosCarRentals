import React from 'react'

import LandingCar5 from "../assets/LandingCar5.jpg"
import RollsRoyceCar from "../assets/RollsRoyceCar.png"
import BMWCar from "../assets/BMWCar.png"
import booking from "../assets/booking.png"
import driver from "../assets/driver.png"
import luxCar from "../assets/luxCar.png"
import ePay from "../assets/ePay.png"
import LandingPage from './LandingPage'
import OurFleets from './OurFleets'
import OurServices from './OurServices'
import WhyChooseUs from './WhyChooseUs'
import DailyDeal from './DailyDeal'
import Footer from './Footer'

const HomePage = () => {

 


 

 
  return (
    <div className=' px-[5%] '>
      
      <LandingPage/>
     
      <OurServices/>

      <OurFleets/>

      <WhyChooseUs/>

      <DailyDeal/>
      
     <Footer/>
      {/* WHY CHOOSE US */}
      
      
    </div>
  )
}

export default HomePage