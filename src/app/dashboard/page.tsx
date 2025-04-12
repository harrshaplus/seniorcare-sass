export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
        <p className="text-gray-600 mt-2">Here's your health overview for today</p>
      </div>

      {/* Health Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Heart Rate</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">72 BPM</p>
          <p className="text-sm text-gray-500 mt-1">Normal range</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Blood Pressure</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">120/80</p>
          <p className="text-sm text-gray-500 mt-1">Optimal</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Steps Today</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">2,345</p>
          <p className="text-sm text-gray-500 mt-1">Goal: 5,000</p>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Appointments</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-semibold">Dr. Smith - Cardiology</h3>
              <p className="text-gray-600">Tomorrow, 10:00 AM</p>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
              View Details
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-semibold">Physical Therapy</h3>
              <p className="text-gray-600">Friday, 2:00 PM</p>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Medication Schedule */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Medications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-semibold">Metformin</h3>
              <p className="text-gray-600">1 tablet with breakfast</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600">✓ Taken</span>
              <button className="text-indigo-600 hover:text-indigo-700">Edit</button>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-semibold">Lisinopril</h3>
              <p className="text-gray-600">1 tablet with dinner</p>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
              Mark as Taken
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 