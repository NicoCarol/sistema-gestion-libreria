import React, { useState } from 'react';
import {
  FaHome,
  FaClipboardList,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaFileAlt,
  FaChartBar,
  FaPlusCircle,
  FaBars
} from 'react-icons/fa';

const Aside = ({ isCollapsed, setIsCollapsed }) => {
  const [activeSection, setActiveSection] = useState('Inicio');

  const menuItems = [
    { name: 'Inicio', icon: <FaHome /> },
    { name: 'Escritorio', icon: <FaClipboardList /> },
    { name: 'Productos', icon: <FaBoxOpen /> },
    { name: 'Vender', icon: <FaShoppingCart /> },
    { name: 'Clientes', icon: <FaUsers /> },
    { name: 'Caja', icon: <FaFileAlt /> },
    { name: 'Reportes', icon: <FaChartBar /> },
    { name: 'Usuarios', icon: <FaUsers /> },
    { name: 'Más', icon: <FaPlusCircle /> },
  ];

  return (
    <aside className={`bg-gray-50 border-r border-gray-300 h-screen fixed left-0 top-0 z-10 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-4 flex justify-end">
        {/* <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-gray-600 hover:text-gray-800">
          <FaBars />
        </button> */}
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button onClick={() => setActiveSection(item.name)} className={`w-full flex items-center p-2 rounded-lg ${activeSection === item.name ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'}`}>
                <span className={`mr-2 ${isCollapsed ? 'mx-auto' : ''}`}>{item.icon}</span>
                {!isCollapsed && <span className="whitespace-nowrap">{item.name}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-300 absolute bottom-0 w-full bg-gray-50">
          <p className="text-gray-500 text-sm">Tienda</p>
        </div>
      )}
    </aside>
  );
};

export default Aside;
