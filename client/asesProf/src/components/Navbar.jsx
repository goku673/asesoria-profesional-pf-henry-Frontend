import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
        <span className="material-symbols-outlined">deployed_code</span>
        </div>

        <div className="flex items-center justify-start">
          <ul className="flex gap-5 mr-4">
              <NavLink to='/home'>Home</NavLink>
              <Link to='services' spy={true} smooth={true} offset={50} duration={500}>Services</Link>
              <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
          </ul>

            <div className="flex">
              <div className="flex items-center bg-white w-48 justify-around py-2">
                <span className="material-symbols-outlined"onClick={toggleMenu}>account_circle</span>
                <button onClick={toggleMenu} className="ml-2">User</button>
              </div>
             
              {menuOpen && (
                <div className="absolute mt-10 w-48 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg">

                      <NavLink to="/createServices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Create Service
                      </NavLink>
                      <NavLink to="/editProfile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Edit Profile
                      </NavLink>
                    <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <span className="material-symbols-outlined">logout</span>
                      <NavLink to='/'>logout</NavLink>
                    </li>
                
                </div>
              )}
            </div>
          
        </div>
      </div>
      </>
  );
};

export default Navbar;

