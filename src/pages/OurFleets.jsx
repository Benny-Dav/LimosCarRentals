import React from 'react'
import RollsRoyceCar from "../assets/RollsRoyceCar.png"


const OurFleets = () => {
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
          image: RollsRoyceCar,
          modelName: "BMW"
        }
      ]

  return (
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
  )
}

export default OurFleets