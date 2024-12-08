import React, { useContext, useEffect, useState } from 'react';
import './nav.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { FaCloudMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  
  // State to track the current theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // State for hover behavior
  const [isHovered, setIsHovered] = useState(false);

  // Apply the theme to the <html> element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save the theme to local storage
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Hover handlers
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="navbar bg-gray-900 text-gray-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <NavLink to="/">Home</NavLink>
            <NavLink to="allCampaign">All Campaign</NavLink>
            <NavLink to="addCampaign">Add New Campaign</NavLink>
            <NavLink to="myCampaign">My Campaign</NavLink>
            <NavLink to="myDonations">My Donations</NavLink>
          </ul>
        </div>
        <div><img className='h-12 w-12 rounded-full' src="https://i.ibb.co.com/kByzcS7/DALL-E-2024-12-04-20-36-53-A-professional-and-minimalist-circular-logo-for-a-crowdfunding-website-na.webp" alt="" /></div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="allCampaign">All Campaign</NavLink>
          <NavLink to="addCampaign">Add New Campaign</NavLink> 
          <NavLink to="myCampaign">My Campaign</NavLink>
          <NavLink to="myDonations">My Donations</NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="mr-10 lg:mr-20">
          <button onClick={toggleTheme}>
            {theme === "light" ? <FaCloudMoon /> : <IoIosSunny />}
          </button>
        </div>

        {/* User Profile & Login/Logout */}
        <div className='flex items-center gap-4'>
          {user && user?.email ? (
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="User Profile" />
              
              {isHovered && (
                <div className="absolute right-3 z-50 top-full bg-black text-white  px-2 py-1 rounded">
                  <span>{user.displayName}</span>
                  <br />
                  <Link to="/" onClick={handleLogOut} className="btn btn-neutral mt-2">Log out</Link>
                </div>
              )}
            </div>
          ) : (
            <FaUserCircle className='w-12 h-10' />
          )}

          {user && user?.email ? null : (
            <NavLink to="/login" className="btn btn-neutral">Login</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
