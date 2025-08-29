export function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to your pet care dashboard</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Upcoming Appointments</h3>
          <p className="text-gray-500">No upcoming appointments</p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Pet Health</h3>
          <p className="text-gray-500">All pets are healthy</p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Recent Activity</h3>
          <p className="text-gray-500">No recent activity</p>
        </div>
      </div>
    </div>
  )
}
