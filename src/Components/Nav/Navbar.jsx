import React, { useContext } from 'react';
import './nav.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
const Navbar = () => {
  const { user,handleLogOut } = useContext(AuthContext);
  
  return (
    <div className="navbar bg-gray-900  text-gray-300">
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
        <NavLink to="myCampaign">My  Campaign</NavLink>
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
        <NavLink to="myCampaign">My  Campaign</NavLink>
        <NavLink to="myDonations">My Donations</NavLink>
    </ul>
  </div>
      <div className="navbar-end">
     {user && user?.email ? (
          <Link to="/" onClick={handleLogOut} className="btn btn-info">Log out</Link>
        ) : (
          <Link to="/login" className="btn btn-info">Login</Link>
        )}
  
  </div>
</div>
  );
};

export default Navbar;