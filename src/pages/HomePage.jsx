import React from 'react'
import Navbar from '../components/Navbar'
import LandingCar4 from "../assets/LandingCar4.jpg"
import LandingCar5 from "../assets/LandingCar5.jpg"
import RollsRoyceCar from "../assets/RollsRoyceCar.png"
import BMWCar from "../assets/BMWCar.png"
const HomePage = () => {

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

  const fleet = [
    {
      id: 1,
      image: RollsRoyceCar,
      modelName: "RollsRoyce"
    },
    {
      id: 2,
      image: RollsRoyceCar,
      modelName: "Bentley"
    },
    {
      id: 3,
      image: RollsRoyceCar,
      modelName: "Escalade"
    },
    {
      id: 4,
      image: BMWCar,
      modelName: "BMW"
    }
  ]
  return (
    <div className=' px-[5%] '>
      <section className='h-[100vh] flex flex-col mb-8'>
        <Navbar />
        <div className='h-[100%]'>
          <div className=' w-[100%] h-[95%] rounded-3xl bg-center bg-no-repeat bg-cover pt-[1.5em]' style={{ backgroundImage: `url(${LandingCar4})` }}>
            {/* TEXT */}
            <div className='text-center ml-auto mr-auto flex flex-col justify-center h-[40%] w-[60%] gap-y-[5%]'>
              <h1 className='text-7xl font-bold'>Luxury Limo Hire</h1>
              <h3 className='w-[50%] ml-auto mr-auto text-base text-center font-bold'>We offer professional car rentals and limo services in our range of high-end vehicles</h3>
              <button className='w-[20%] ml-auto mr-auto font-medium text-sm rounded-md px-6 py-2 bg-gray-800 text-white'>View Fleet</button>
            </div>

          </div>
        </div>
      </section>

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
      {/* OUR FLEET */}
      <section className='h-[100vh] flex flex-col '>
        {/* text */}
        <div className='flex h-[10%] mb-8'>
          <h1 className='w-[40%] flex pr-8 justify-end text-5xl font-bold'>Our Fleet</h1>
          <h2 className='w-[40%] font-medium text-gray-700'>We offer an extensive fleet of vehicles including sedans, limousines and crossovers</h2>
        </div>
        {/* Slide controls */}
        <div className='h-[6%] flex items-center w-[50%] ml-auto mr-auto text-sm font-bold gap-x-4 mb-8 '>
          <p className='py-2 px-6 bg-gray-200 flex items-center rounded-lg border-r-4'>All</p>
          <p className='py-2 px-6 bg-gray-200 flex items-center rounded-lg border-r-4'>Luxury</p>
          <p className='py-2 px-6 bg-gray-200 flex items-center rounded-lg border-r-4'>Business</p>
          <p className='py-2 px-6 bg-gray-200 flex items-center rounded-lg border-r-4'>Crossovers</p>

        </div>
        {/* slide */}
        <div className='border h-1/2 grid grid-cols-4 gap-x-6 px-6 py-4'>

          {fleet.map((fleetCar) => (
            <div className='border flex flex-col'>
              <div className='h-[70%] border w-full mb-4 rounded-xl'>
                <img src={fleetCar.image} alt={fleetCar.modelName} />
              </div>
              <p className='text-lg font-bold'>{fleetCar.modelName}</p>
            </div>
          ))}
          

        </div>


      </section>
    </div>
  )
}

export default HomePage