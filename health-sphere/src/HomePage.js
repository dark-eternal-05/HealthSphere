// src/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">HealthSphere</h1>
        <p>Your health, our priority</p>
      </header>

      <main className="flex-grow p-6">
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Welcome to HealthSphere</h2>
          <p className="text-gray-700">
            Your one-stop solution for all your healthcare needs. Connect with doctors, manage your health records, and find the best medicines at the lowest prices.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Doctor on Call</h3>
            <p>Connect with healthcare professionals instantly via our VoIP service.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Medicine Comparison</h3>
            <p>Find the cheapest medicines available online with our comparison tool.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">One-Click Appointments</h3>
            <p>Book your doctor appointments with just one click!</p>
          </div>
        </section>
      </main>

      <footer clas22sName="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2023 HealthSphere. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;