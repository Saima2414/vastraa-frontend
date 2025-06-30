// src/pages/ProjectInfo.jsx
import React from 'react';

const ProjectInfo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-10 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold text-blue-700">🚀 Vastraa Project Deployment</h1>

      <a
        href="/"
        className="text-lg text-white bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        🛍️ Customer Website (Frontend)
      </a>

      <a
        href="https://vastraa-admin.vercel.app"
        className="text-lg text-white bg-green-600 px-6 py-3 rounded hover:bg-green-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        🛠️ Admin Panel
      </a>

      <a
        href="https://vastraa-backend.onrender.com/api/test"
        className="text-lg text-white bg-gray-700 px-6 py-3 rounded hover:bg-gray-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        ⚙️ Backend API (Test)
      </a>
    </div>
  );
};

export default ProjectInfo;
