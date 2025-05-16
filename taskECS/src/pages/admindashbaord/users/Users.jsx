import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const departments = [
  { id: 1, name: "Management" },
  { id: 2, name: "Human Resources" },
  { id: 3, name: "Finance" },
  { id: 4, name: "Marketing" },
  { id: 5, name: "IT Support" },
];

const dummyUsers = [
  { id: 1, name: 'Alice', department: 'Management', active: true },
  { id: 2, name: 'Bob', department: 'Finance', active: false },
  { id: 3, name: 'Charlie', department: 'IT Support', active: true },
];

const Users = () => {
  const [selectedDept, setSelectedDept] = useState('');
  const filteredUsers = selectedDept
    ? dummyUsers.filter(user => user.department === selectedDept)
    : dummyUsers;

  const totalUsers = filteredUsers.length;
  const activeUsers = filteredUsers.filter(user => user.active).length;
  const activePercentage = totalUsers ? (activeUsers / totalUsers) * 100 : 0;

  return (
    <div className="h-full w-full rounded-2xl shadow-2xl flex flex-col p-4 space-y-4">

      {/* 1. Search by Department */}
      <div className="w-full bg-white rounded-2xl shadow p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <select
          value={selectedDept}
          onChange={e => setSelectedDept(e.target.value)}
          className="p-2 border rounded-md w-full md:w-1/2"
        >
          <option value="">All Departments</option>
          {departments.map(dept => (
            <option key={dept.id} value={dept.name}>
              {dept.name}
            </option>
          ))}
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2 w-full md:w-auto justify-center">
          <FaPlus /> Add User
        </button>
      </div>

      {/* 2. Stats Summary */}
      <div className="w-full bg-white rounded-2xl shadow p-4 flex flex-col sm:flex-row items-center justify-around gap-4 text-center">
        <div >
          <p className="text-lg font-semibold">Total Users</p>
          <p>{totalUsers}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Active Users</p>
          <p>{activeUsers}</p>
        </div>
        <div className="w-full sm:w-1/3">
          <p className="text-lg font-semibold mb-1">Progress</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full transition-all"
              style={{ width: `${activePercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3. Graph Section */}
      <div className="w-full h-56 bg-white rounded-2xl shadow p-4">
        <p className="font-bold text-lg mb-2">Tasks & Performance Graph</p>
        <div className="h-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
          Graph Placeholder
        </div>
      </div>

      {/* 4. User List */}
      <div className="w-full bg-white rounded-2xl shadow p-4">
        <p className="font-bold text-lg mb-4">User List</p>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Name</th>
                <th className="p-2">Department</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id} className="border-b">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.department}</td>
                  <td className="p-2">{user.active ? 'Active' : 'Inactive'}</td>
                  <td className="p-2 flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Users;
