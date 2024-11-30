import React from 'react'
import booking from "../assets/booking.png"
import driver from "../assets/driver.png"
import luxCar from "../assets/luxCar.png"
import ePay from "../assets/ePay.png"

const WhyChooseUs = () => {
    const features = [
        {
          id: 1,
          icon: booking,
          bg: "[#7c9640]",
          title: "Easy Online Booking",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
        },
        {
          id: 2,
          icon: driver,
          bg: "[#CED3D6]",
          title: "Professional Drivers",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
        },
        {
          id: 3,
          icon: luxCar,
          bg: "[#7c9640]",
          title: "Luxury Cars",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
        },
        {
          id: 4,
          icon: ePay,
          bg: "[#CED3D6]",
          title: "Online Payment",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
        }
      ]
  return (
    <section className='h-[60vh] flex flex-col mb-14'>
        <div className='flex w-full h-[10%] mb-10 '>
          <h1 className='w-[40%] flex pr-8 justify-end text-5xl font-bold'>Why Choose Us</h1>
          <h2 className='w-[40%] font-medium text-gray-700'>At Limos we pride ourselves in delivering extensive services to fulfil all your needs with first rate customer care</h2>
        </div>
        <div className='grid grid-cols-4 h-[80%] '>
          {
            features.map((feature, index) => (
              <div key={index} className='flex flex-col px-[1em] py-[1em] h-[100%]'>
                <div className='border w-[60%] mb-[1.5em] ml-[15%] mr-auto h-[50%] rounded-xl' style={{ background: `url(${feature.bg})` }}>
                  <img src={feature.icon} alt={feature.title} className='h-[80%] flex ml-auto mr-auto pt-[2em]' />
                </div>
                <h3 className='w-[70%] ml-auto mr-auto font-semibold mb-[1em]'>{feature.title}</h3>
                <p className='w-[70%] ml-auto mr-auto text-sm text-gray-600'>{feature.description}</p>

              </div>
            ))
          }
        </div>
      </section>
  )
}

export default WhyChooseUs