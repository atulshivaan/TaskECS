import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Navbar />
      <div className="main-content" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="page-content" style={{ flex: 1, padding: '10px' }}>
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
