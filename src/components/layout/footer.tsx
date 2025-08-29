export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Borzolini</span>
            </div>
            <p className="text-gray-600 text-sm">
              Professional pet care and veterinary services. Book appointments, 
              track your pet's health, and get expert advice from our team.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a></li>
              <li><a href="/appointments" className="text-gray-600 hover:text-gray-900">Appointments</a></li>
              <li><a href="/profile" className="text-gray-600 hover:text-gray-900">Profile</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="/help" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Borzolini Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
