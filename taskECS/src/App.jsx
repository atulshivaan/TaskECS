import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';

import Homeadmin from './pages/admindashbaord/Homeadmin';
import HomeUser from './pages/userdabboard/HomeUser';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin-dashboard"
          element={
            <>
              <Navbar />
              <Homeadmin />
            </>
          }
        />
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
    </>
  );
}

export default App;
