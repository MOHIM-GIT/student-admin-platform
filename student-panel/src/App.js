import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">Student Portal</h1>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">
        {!isLoggedIn ? (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Welcome to Student Portal</h2>
            <button onClick={() => setIsLoggedIn(true)} className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"> Login </button>
          </motion.div>
        ) : (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">My Courses</h3>
              <p className="text-gray-600">View all your enrolled courses</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Progress</h3>
              <p className="text-gray-600">Track your learning progress</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Notifications</h3>
              <p className="text-gray-600">View all your notifications</p>
            </div>
          </motion.div>
        )}
      </main>
    </motion.div>
  );
}

export default App;