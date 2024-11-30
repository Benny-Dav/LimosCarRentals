import React, { useState } from 'react';
import FleetHeadBg from "../assets/FleetHeadBg.png";
import Navbar from '../components/Navbar';
import suv from "../assets/suv.png";
import sports from "../assets/sports.png";
import limousine from "../assets/limousine.png";
import FD from "../constants/FleetDisplay";
import { Link } from 'react-router-dom';

const FleetPage = () => {
    const [filteredCars, setFilteredCars] = useState(FD.FLEETCARS);
    //state for active button
    const [activeBtn, setActiveBtn]=useState(false);
    //state for visibility of fleet display div
    const [FleetVisible, setFleetVisible]=useState(false);

    
    const showCars = (category) => {
        
        if (category === "all") {
            setFleetVisible(!FleetVisible);
            setFilteredCars(FD.FLEETCARS);
        } else {
            const filtered = FD.FLEETCARS.filter((car) => car.category === category);
            setFilteredCars(filtered);
        }
        setActiveBtn(category);
    };

    return (
        <div className="bg-[#1a1a1a] text-[#F9F9F9] min-h-screen">
            <Navbar />
            {/* Hero Section */}
            <section
                className="h-[80vh] flex flex-col justify-center items-start px-[10%] bg-center bg-cover bg-no-repeat relative"
                style={{ backgroundImage: `url(${FleetHeadBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#1a1a1a]/80"></div>
                <div className="relative z-10">
                    <h1 className="text-6xl font-extrabold mb-4">OUR FLEET</h1>
                    <p className="text-lg text-[#A1A1A1] max-w-[60%] mb-8">
                        Discover our range of high-performance vehicles, tailored to meet your needs. Whether you're looking for luxury, sport, or practicality, our fleet has you covered.
                    </p>
                    
                </div>
            </section>

            {/* Filters */}
            <div className="flex justify-center gap-8 px-10">
            <button
                        onClick={() => showCars("all")}
                        className={`px-8 py-3 text-white rounded-lg transition ${activeBtn === "all" ? "bg-[#B71C1C]" : "bg-gray-800"}`}
                    >
                        VIEW ALL CARS
                    </button>
                <button
                    onClick={() => showCars("SUV")}
                    className={`flex items-center px-6 py-3 rounded-lg transition ${activeBtn === "SUV" ? "bg-[#B71C1C]" : "bg-gray-800"}`}
                >
                    <img src={suv} alt="SUV" className="h-8 w-8 mr-3" />
                    SUV
                </button>
                <button
                    onClick={() => showCars("Luxury")}
                    className={`flex items-center px-6 py-3 rounded-lg transition ${activeBtn === "Luxury" ? "bg-[#B71C1C]" : "bg-gray-800"}`}
                >
                    <img src={limousine} alt="Luxury" className="h-8 w-8 mr-3" />
                    LUXURY
                </button>
                <button
                    onClick={() => showCars("Sports")}
                    className={`flex items-center px-6 py-3 rounded-lg transition ${activeBtn === "Sports" ? "bg-[#B71C1C]" :"bg-gray-800"}`}
                >
                    <img src={sports} alt="Sports" className="h-8 w-8 mr-3" />
                    SPORTS
                </button>
            </div>

            {/* Fleet Display */}
            {
                FleetVisible && (
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mt-12 px-[7%] pb-10">
                {filteredCars.map((car, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Link to={car.path}>
                            <img
                                src={car.image}
                                alt={car.modelName}
                                className="w-full h-40 object-cover mb-4"
                            />
                        </Link>
                        <h3 className="text-center text-lg font-semibold">{car.modelName}</h3>
                        <p className="text-center text-sm text-[#A1A1A1] mb-2">{car.modelYear}</p>
                        <div className="flex flex-col w-full ">
                            <p className='flex justify-center items-center'><p className="text-[#D26900] font-semibold mr-2">{car.price}</p>
                            <p className="text-[#A1A1A1]">Per Day</p></p>

                            <Link to={car.path} className="text-[#FF7043] text-sm text-center mt-2">
                            View Details
                        </Link>
                        </div>
                        
                    </div>
                ))}
            </section>
                )
            }
        </div>
    );
};

export default FleetPage;
