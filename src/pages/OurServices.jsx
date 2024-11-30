import React from 'react'
import LandingCar5 from "../assets/LandingCar5.jpg"

const OurServices = () => {
    const services = [
        {
          id: 1,
          title: "Aitport Transfers",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
          image: LandingCar5
        },
        {
          id: 2,
          title: "Wedding Events",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
          image: LandingCar5
        },
        {
          id: 3,
          title: "Intercity Trips",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
          image: LandingCar5
        },
        {
          id: 4,
          title: "Business Meeting",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
          image: LandingCar5
        },
      ]
  return (
    <section className='h-[100vh] flex flex-col mb-8'>
    {/* text */}
    <div className='flex h-[10%] mb-8'>
      <h1 className='w-[40%] flex pr-8 justify-end text-5xl font-bold'>Services</h1>
      <h2 className='w-[40%] font-medium text-gray-700'>We invite you to try our services, and we personally guarantee that you will be satisfied.</h2>
    </div>

    {/* SERVICE CARDS */}
    <div className=' grid grid-cols-2 grid-rows-2 h-[80%] gap-x-8 gap-y-4'>
      {services.map((service) => (
        <div className='rounded-xl py-4 px-4 bg-gray-100 flex gap-x-4'>
          <div className='border w-[50%] rounded-xl'>
            <img src={service.image} alt={service.title} className="rounded-xl h-full w-full object-cover" />
          </div>

          <div className='h-full py-2 flex flex-col w-[50%]'>
            <h3 className='font-bold text-xl mb-4 '>{service.title}</h3>
            <p className='mb-6 text-gray-700'>{service.description}</p>
            <button className='w-[60%] px-6 py-2 bg-black rounded-xl text-white'>Read more</button>
          </div>
        </div>
      ))}

    </div>
  </section>
  )
}

export default OurServices