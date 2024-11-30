import React, { useState, useEffect } from 'react';
import benzCar from "../assets/benzCar.png";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const BenzPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    //state for datepicker
    const [selectedDate, setSelectedDate] = useState(null);
    const handleBookNow = () => {
        setIsBookingOpen(!isBookingOpen);
    };


    useEffect(() => {
        // Trigger animation
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
        }, 200);
    }, []);

    return (
        <div>
            <section className="w-full bg-[#1a1a1a] relative">
                {/* Main Content */}
                <div className="h-[100%] w-[80%] flex flex-col mx-auto">
                    {/* TEXT */}
                    <div className="mt-[-3%] h-[20%] text-center">
                        <h1 id="carName" className="text-[140px] font-extrabold text-white">AMG S63</h1>
                    </div>
                    {/* CAR IMAGE */}
                    <div className="h-[70%] z-[10] mt-[-13%]">
                        <img
                            src={benzCar}
                            alt="Benz Car"
                            className={`w-auto h-full object-contain transform transition-transform duration-700 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
                        />
                    </div>
                </div>

                {/* Book Now Button */}
                <button
                    onClick={handleBookNow}
                    className="absolute bottom-[5%] right-[5%] bg-[#B71C1C] text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-[#FF7043] transition-all duration-300"
                >
                    Book Now
                </button>

                {/* Pop-up */}
                {isBookingOpen && (
                    <div className="fixed bottom-5 right-5 w-[300px] h-[70%] p-4 bg-[#2e2e2e] text-white rounded-lg shadow-lg z-50">
                        <h2 className="text-lg font-bold">Booking Form</h2>
                        <p className="text-sm text-[#A1A1A1] mb-4">Fill in your details to book a reservation to rent this car.</p>
                        <form>
                            <select className="w-full p-2 mb-3 bg-[#1a1a1a] text-white border border-[#B71C1C] rounded">
                                <option value="">Mercedes-Benz AMG S63</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 mb-3 bg-[#1a1a1a] text-white border border-[#B71C1C] rounded"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 mb-3 bg-[#1a1a1a] text-white border border-[#B71C1C] rounded"
                            />
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                showTimeSelect
                                dateFormat="Pp"
                                placeholderText="Select Date and Time"
                                className="custom-datepicker-input w-full p-2 mb-3 bg-[#1a1a1a] text-white border border-[#B71C1C] rounded"
                                calendarClassName="custom-datepicker-calendar"
                                wrapperClassName="custom-datepicker-wrapper"
                            />
                            <button
                                type="submit"
                                className="w-full py-2 bg-[#B71C1C] rounded hover:bg-[#FF7043] transition-all duration-300"
                            >
                                Submit
                            </button>
                        </form>

                        <button
                            onClick={handleBookNow}
                            className="absolute top-2 right-2 text-[#FF7043] hover:text-[#B71C1C] text-lg"
                        >
                            &times;
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default BenzPage;
