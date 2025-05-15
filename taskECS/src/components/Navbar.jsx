import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can also clear any auth tokens here if you have them
    navigate("/login"); 
  };

  return (
    <div className="flex justify-between items-center h-14 w-full shadow-2xl">
      <div className="p-3 flex gap-1">
        <img src="/logo.jpg" className="w-12 h-9" alt="logo" />
        <h3 className="text-3xl">
          <span className="text-red-700">Task</span>ECS
        </h3>
      </div>
      <div className="p-3 cursor-pointer" onClick={handleLogout}>
        <IoIosLogOut className="h-10 w-12 p-2 shadow-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
