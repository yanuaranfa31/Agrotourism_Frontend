import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#6B9C89] text-white p-6 flex flex-col">
        <div className="flex justify-center mb-8">
        </div>
        <nav className="flex flex-col space-y-4">
          <Link 
            to="/kuota-admin" 
            className="text-lg font-medium hover:bg-[#557e68] hover:text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Kuota Management
          </Link>
          <Link 
            to="/approval-admin" 
            className="text-lg font-medium hover:bg-[#557e68] hover:text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Approval Management
          </Link>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-[#6B9C89] mb-4">Selamat Datang, Admin!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Anda berada di halaman Admin, tempat Anda dapat mengelola kuota wisata dan proses approval. 
            Silakan pilih salah satu menu di sidebar untuk mulai mengelola data.
          </p>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
