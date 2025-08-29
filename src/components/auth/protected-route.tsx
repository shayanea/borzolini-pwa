import { Outlet, Navigate } from 'react-router-dom'

export function ProtectedRoute() {
  // TODO: Implement actual authentication check
  const isAuthenticated = false // This will be replaced with actual auth logic
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  
  return <Outlet />
}
