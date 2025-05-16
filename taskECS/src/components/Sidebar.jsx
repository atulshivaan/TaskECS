import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBuilding, FaUsers, FaTasks, FaChartBar, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'text-gray-800 hover:bg-blue-100 hover:text-blue-600'
    }`;

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      <div
        className={`
          fixed top-0 left-0 w-56 bg-zinc-100 shadow-md p-4
          min-h-screen
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:w-48 md:m-1
          z-40
        `}
      >
        <nav className="flex flex-col h-full space-y-2 pt-12 md:pt-0">
          <NavLink to="/admin-dashboard" end className={linkClasses} onClick={() => setIsOpen(false)}>
            <FaHome />
            Home
          </NavLink>
          <NavLink to="/admin-dashboard/departments" className={linkClasses} onClick={() => setIsOpen(false)}>
            <FaBuilding />
            Departments
          </NavLink>
          <NavLink to="/admin-dashboard/users" className={linkClasses} onClick={() => setIsOpen(false)}>
            <FaUsers />
            Users
          </NavLink>
          <NavLink to="/admin-dashboard/tasks" className={linkClasses} onClick={() => setIsOpen(false)}>
            <FaTasks />
            Tasks
          </NavLink>
          <NavLink to="/admin-dashboard/performance" className={linkClasses} onClick={() => setIsOpen(false)}>
            <FaChartBar />
            Performance
          </NavLink>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;

