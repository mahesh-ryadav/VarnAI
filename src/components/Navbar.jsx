import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { setShowLogin, user, credit, logout } = useContext(AppContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-center justify-between py-4">
      {/* Logo */}
      <Link to="/">
        <img className="w-28 sm:w-32 lg:w-40" src={assets.logo} alt="Logo" />
      </Link>

      {/* Right Side */}
      <div>
        {user ? (
          <div className="flex items-center gap-3 relative">
            {/* Credits Button */}
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
            >
              <img className="w-5" src={assets.credit_star} alt="Credit" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits left: {credit}
              </p>
            </button>

            {/* Greeting (desktop only) */}
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>

            {/* Profile Icon with dropdown */}
            <div className="relative">
              <img
                onClick={toggleDropdown}
                className="w-10 drop-shadow cursor-pointer"
                src={assets.profile_icon}
                alt="Profile"
              />

              {/* Dropdown (works on all screen sizes) */}
              {dropdownOpen && (
                <div className="absolute right-0 top-12 bg-white border rounded-md shadow-md p-2 z-50">
                  <p
                    onClick={logout}
                    className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100 rounded"
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-zinc-800 text-white px-6 py-2 text-sm rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
