import React from 'react'
import { useState, useEffect } from 'react'
import rangeRover from "../assets/rangeRover.png"

const RangeRover = () => {
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
        <section className="w-full bg-[#1a1a1a]">
            
            <div className='h-[100%] w-[80%] flex flex-col'>
                {/* TEXT  */}
                <div className='mt-[-3%] h-[20%] ml-auto mr-auto w-full'>
                    <h1 id="carName" className='text-8xl font-extrabold text-white w-full'>Sports Evoque</h1>
                </div>
                {/* CAR IMAGE */}
                <div className='h-[50%] z-[10] mt-[-13%]'>
                    <img src={rangeRover} alt="" className={`w-auto h-full object-contain transform transition-transform duration-700 ease-in-out ${isVisible?"translate-x-0 opacity-100":"-translate-x-full opacity-0"}`} />
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default RangeRover