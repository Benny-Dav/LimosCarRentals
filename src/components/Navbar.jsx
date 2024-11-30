import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-[#1a1a1a] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#B71C1C] font-extrabold text-3xl tracking-wide">
          LIMOS<span className="text-[#FF7043]">+</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          <ul className="flex space-x-8 text-lg font-medium text-gray-300">
            <li className="hover:text-[#FF7043] transition-all duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#FF7043] transition-all duration-300 cursor-pointer">
              Vehicles
            </li>
            <li className="hover:text-[#FF7043] transition-all duration-300 cursor-pointer">
              Gallery
            </li>
            <li className="hover:text-[#FF7043] transition-all duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
          <button
            className="ml-6 bg-[#B71C1C] text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-[#FF7043] transition-all duration-300"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-300 hover:text-[#FF7043] transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1a1a1a] shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium text-gray-300 text-lg">
            <li className="hover:text-[#FF7043] transition-all duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#FF7043] transition-all duration-300 cursor-pointer">
              Vehicles
            </li>
            <li className="hover:text-[#FF7043] transition-all duration-300 cursor-pointer">
              Gallery
            </li>
            <li className="hover:text-[#FF7043] transition-all duration-300 cursor-pointer">
              Contact
            </li>
            <button
              className="mt-4 bg-[#B71C1C] text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-[#FF7043] transition-all duration-300"
            >
              Book Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
