import React from 'react'
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png'
const Navbar =  () => {
  return (
   <nav className="navbar flex justify-between items-center fixed top-0 w-full bg-yellow-400 px-4 py-3">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-8 width=170 height=165" />
      </div>
      {/* Pages */}
      <ul className="flex space-x-20">
        <li>
          <Link to="/" className="text-purple-700 hover:text-white font-bold" >Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-purple-700 hover:text-white font-bold">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-purple-700 hover:text-white font-bold">Contact</Link>
        </li>
        <li>
          <Link to="/pricing" className="text-purple-700 hover:text-white font-bold">Pricing</Link>
        </li>
      </ul>
    </nav>
  
);
};

export default Navbar;
