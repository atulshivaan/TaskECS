import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center h-16 w-full px-6 bg-white shadow-lg sticky top-0 z-50">
     
      <div className="flex items-center gap-3">
        <img
          src="/logo.jpg"
          alt="logo"
          className="w-12 h-12 rounded-md object-cover shadow"
        />
        <h1 className="text-3xl font-extrabold tracking-wide select-none">
          <span className="text-red-600">Digi</span>
          <span className="text-gray-800">ECS</span>
        </h1>
      </div>

      
      <button
        onClick={handleLogout}
        title="Logout"
        className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors rounded-md p-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600"
      >
        <IoIosLogOut className="w-6 h-6" />
        <span className="hidden sm:inline font-semibold">Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;
