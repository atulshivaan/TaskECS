import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Departments = () => {
  const departments = [
    { id: 1, name: "Management", head: "Alice Johnson", description: "Handles strategic planning and decision-making." },
    { id: 2, name: "Human Resources", head: "Brian Smith", description: "Responsible for recruitment, training, and employee welfare." },
    { id: 3, name: "Finance", head: "Catherine Lee", description: "Manages company finances, budgeting, and accounting." },
    { id: 4, name: "Marketing", head: "David Kim", description: "Oversees advertising, branding, and market research." },
    { id: 5, name: "IT Support", head: "Emma Brown", description: "Provides technical support and maintains IT infrastructure." },
  ];

  const [selectedDeptId, setSelectedDeptId] = useState(null);
  const selectedDept = departments.find(dept => dept.id === Number(selectedDeptId));

  return (
    <div className="min-h-screen w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
    
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <select
          className="w-full sm:w-64 p-2 rounded border border-gray-400"
          value={selectedDeptId || ""}
          onChange={e => setSelectedDeptId(e.target.value)}
        >
          <option value="" disabled>Select Department</option>
          {departments.map(dept => (
            <option key={dept.id} value={dept.id}>{dept.name}</option>
          ))}
        </select>

        <NavLink
          to="/admin-dashboard/departments/add"
          className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
        >
          Add Department
        </NavLink>
      </div>

   
      {selectedDept ? (
        <div className="bg-white p-6 h-40 mt-2 w-70 rounded shadow-md max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">{selectedDept.name}</h2>
          <p><strong>Head:</strong> {selectedDept.head}</p>
          <p className="mt-2">{selectedDept.description}</p>
        </div>
      ) : (
        <p className="text-gray-700 text-center">Please select a department to see details.</p>
      )}
    </div>
  );
};

export default Departments;
