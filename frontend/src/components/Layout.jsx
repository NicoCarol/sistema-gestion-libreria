import React, { useState } from 'react';
import Navbar from './Navbar';
import Aside from './Aside';

const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex">
      <Aside isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className="flex-1">
        <Navbar sectionName="Inventario" adminName="Nico" isCollapsed={isCollapsed} />
        <main className={`p-4 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
