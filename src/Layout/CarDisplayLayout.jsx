import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Details from '../components/Details'
import Photos from '../components/Photos'

const CarDisplayLayout = () => {
    return (
        <div className='h-[100vh] bg-[#1a1a1a] flex flex-col overflow-y-hidden'>


            <div className='h-[10%] w-full z-10'>
                <Navbar />
            </div>
            {/* Phots and Header */}
            <div className='h-[75%] flex flex-1 w-full '>
                {/* <div className=' h-full w-[15%] mr-[5%] pt-[5%]'>
                    < Photos />
                </div> */}

                <main className='h-full w-[80%] overflow-y-hidden'>
                    <Outlet />
                </main>
            </div>

            <div className='pl-[20%] h-[20%] w-full flex'>
                <Details />
            </div>


        </div>
    )
}

export default CarDisplayLayout