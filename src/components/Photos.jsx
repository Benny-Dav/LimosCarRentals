import React from 'react'
import benzInter from "../assets/benzInter.jpg";
import benzExter from "../assets/benzExter.jpg";

const Photos = () => {
  return (
    <div>
        <div className="flex flex-col gap-y-[1em] pl-[15%]">
                <img src={benzExter} alt="Exterior" className="w-full h-[100px] object-cover rounded-md" />
                <img src={benzInter} alt="Interior" className="w-full h-[100px] object-cover rounded-md" />
            </div>
    </div>
  )
}

export default Photos