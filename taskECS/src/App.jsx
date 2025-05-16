import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';

import Homeadmin from './pages/admindashbaord/Homeadmin';
import Departments from './pages/admindashbaord/adminDepartments/Departments';
import Users from './pages/admindashbaord/users/Users';
import Tasks from './pages/admindashbaord/tasks/Tasks';
import Performance from './pages/performance/Perfoemance';

import HomeUser from './pages/userdabboard/HomeUser';
import AdminLayout from './components/AdminLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      {/* Admin Dashboard Layout Route */}
      <Route path="/admin-dashboard" element={<AdminLayout />}>
        <Route index element={<Homeadmin />} />
        <Route path="departments" element={<Departments />} />
        <Route path="users" element={<Users />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="performance" element={<Performance />} />
      </Route>

      <Route
        path="/user-dashboard"
        element={
          <>
            <Navbar />
            <HomeUser />
          </>
        }
      />
    </Routes>
  );
}

export default App;
