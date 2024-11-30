import React from 'react'
import RollsRoyceCar from "../assets/RollsRoyceCar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const DailyDeal = () => {
    const deals = [
        {
          title: "Cadillac Escalade",
          image:RollsRoyceCar,
          points: [
            {
            id: 1,
            point: "Lorem ipsum dolor sit amet "
          },
            {
            id: 2,
            point: "Lorem ipsum dolor sit amet "
          },
            {
            id: 3,
            point: "Lorem ipsum dolor sit amet "
          },
          {
            id: 4,
            point: "Lorem ipsum dolor sit amet "
          },
          {
            id: 5,
            point: "Lorem ipsum dolor sit amet "
          },
          {
            id: 6,
            point: "Lorem ipsum dolor sit amet "
          },
          {
            id: 7,
            point: "Lorem ipsum dolor sit amet "
          },
          {
            id: 8,
            point: "Lorem ipsum dolor sit amet "
          }
          
          
          ]
        }
      ]
  return (
    <section className='h-[60vh] flex flex-col'>
        <div className='flex flex-col w-full h-[20%] mb-12'>
          <h1 className='w-[40%] ml-auto mr-auto flex pr-8 text-5xl font-bold text-center mb-6'>Only today $75/day</h1>
          <h2 className=' w-[80%] ml-auto mr-auto font-medium text-gray-700 text-center'>Take advantage of our hot offers and save a significant amount when renting a limousine</h2>
        </div>
        <div className='h-[70%] bg-[#CED3D6] rounded-3xl flex'>
          
          <div>
            <img src={deals[0].image} alt={deals[0].title} className='mt-[-10%]'/>
          </div>
          <div className='h-full w-[40%] pt-[2em]'>
            {deals.map((deal,index)=>(
                <div key={deal.title}>
                    <h3 className='text-3xl font-medium mb-6'>{deal.title}</h3>
                <ul className='h-[70%] grid grid-cols-2 gap-x-[5%] gap-y-[5%] mb-8'>
                    {deal.points.map((point)=>(
                        <li className="text-sm text-gray-700" key={point.id}><FontAwesomeIcon icon={faCheck} className='text-[black] text-base mr-2 font-bold'/>{point.point}</li>
                    ))}
                </ul>
                <button className='ml-4 px-4 py-2 bg-black w-[30%] h-[10%] rounded-lg text-white text-sm'>Reserve Now</button>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default DailyDeal