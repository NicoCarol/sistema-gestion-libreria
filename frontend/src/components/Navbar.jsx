import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ sectionName, adminName, isCollapsed }) => {
  return (
    <nav className={`bg-gray-100 border-b border-gray-300 h-16 flex items-center justify-between px-4 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 focus:outline-none">
          <FaBars />
        </button>
        {!isCollapsed && (
          <>
            <span className="text-gray-800 font-semibold">Librería</span>
            <span className="text-gray-500">- {sectionName}</span>
          </>
        )}
      </div>
      <div className="text-gray-700">
        Hola {adminName}
      </div>
    </nav>
  );
};

export default Navbar;
