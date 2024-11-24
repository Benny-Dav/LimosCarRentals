import React, { useState } from 'react'

// import benzLogo from "../assets/benzLogo.png"
const Navbar = () => {

    return (
        <div className='h-[10%] flex items-center w-full '>
            <div className='w-[10%] flex'>
                <span className='font-bold text-lg'>LIMOS</span>
            </div>
            <div className='ml-[20%] w-[30%]'>
                <ul className='font-semibold flex justify-between'>
                    <li>Home</li>
                    <li>Vehicles</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar