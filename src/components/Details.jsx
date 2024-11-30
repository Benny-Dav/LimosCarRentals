
import React from 'react';

const Details = () => {
    
    return (
        <div className="flex flex-row w-[100%] gap-x-[10%]">
            {/* Car Details Section */}


            {/* Car brand Section */}
            <div className="w-[20%]">
                <h3 className="text-[1.4em] font-bold">Mercedes-Benz</h3>
                <h2 id="modelName" className="text-[1.5em] font-bold text-gray-400">
                    GLE COUPE 2024
                </h2>
            </div>

            {/* Stats Section */}
            <div className="flex w-[60%]">
                <div className=" w-[20%] gap-x-[5%]">
                    <h3 className="text-[1.4em] text-gray-400 font-bold">Mileage</h3>
                    <h2 className="text-[1.5em] font-bold">418km</h2>
                </div>
                <div className=" w-[20%] ">
                    <h3 className="text-[1.4em] text-gray-400 font-bold">0-100KM/h</h3>
                    <h2 className="text-[1.5em] font-bold">2.8s</h2>
                </div>
                
                <div>
               
                </div>
                
            </div>



        </div>

    );
};

export default Details;
