import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { setShowLogin, user, credit, logout } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>
        <img className='w-28 sm:w-32 lg:w-40' src={assets.logo} alt="Logo" />
      </Link>

      <div>
        {user ? (
          <div className='flex items-center gap-2 sm:gap-3 relative'>
            {/* Credit Button */}
            <button
              onClick={() => navigate('/buy')}
              className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'
            >
              <img className='w-5' src={assets.credit_star} alt="Credit" />
              <p className='text-xs sm:text-sm font-medium text-gray-600'>
                Credits left : {credit}
              </p>
            </button>

            {/* Greeting (desktop only) */}
            <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>

            {/* Profile Dropdown (responsive) */}
            <div className='relative group'>
              <img
                className='w-10 drop-shadow cursor-pointer'
                src={assets.profile_icon}
                alt="Profile"
              />
              <div className='absolute top-0 right-0 z-10 hidden group-hover:block pt-12'>
                <ul className='bg-white border rounded-md text-sm text-black p-2'>
                  <li
                    onClick={logout}
                    className='py-1 px-2 cursor-pointer hover:bg-gray-100 rounded'
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={() => navigate('/buy')} className='cursor-pointer'>
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className='bg-zinc-800 text-white px-7 py-2 sm:px-10 sm:py-2 text-sm rounded-full'
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
