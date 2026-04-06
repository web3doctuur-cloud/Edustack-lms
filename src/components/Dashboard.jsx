import React from 'react';

const Dashboard = ({ session }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-green-900 mb-2">Welcome back!</h1>
          <p className="text-gray-600 mb-8 font-medium">Logged in as: <span className="text-orange-500">{session?.user?.email}</span></p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 rounded-xl border border-green-100">
              <h3 className="font-bold text-green-800 text-lg">My Courses</h3>
              <p className="text-sm text-green-600">You haven't enrolled in any courses yet.</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
              <h3 className="font-bold text-orange-800 text-lg">Account Progress</h3>
              <p className="text-sm text-orange-600">Complete your profile to start learning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;