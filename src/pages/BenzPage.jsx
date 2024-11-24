import React from 'react'
import { useState, useEffect } from 'react'

import benzCar from "../assets/benzCar.png"
const BenzPage = () => {
    const [isVisible, setIsVisible]=useState(false)

    useEffect(()=>{
        //trigger animation
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
        },200);
    },[]);
  return (
    <div>
        <section className="w-full">
            
            <div className='h-[100%] w-[80%] flex flex-col'>
                {/* TEXT  */}
                <div className='mt-[-3%] h-[20%] ml-auto mr-auto w-full'>
                    <h1 id="carName" className='text-[140px] font-extrabold text-white '>C300 2024</h1>
                </div>
                {/* CAR IMAGE */}
                <div className='h-[70%] z-[10] mt-[-13%]'>
                    <img src={benzCar} alt="" className={`w-auto h-full object-contain transform transition-transform duration-700 ease-in-out ${isVisible?"translate-x-0 opacity-100":"-translate-x-full opacity-0"}`} />
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default BenzPage