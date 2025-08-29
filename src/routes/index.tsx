import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/layout'
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/auth/login'
import { RegisterPage } from '../pages/auth/register'
import { DashboardPage } from '../pages/dashboard'
import { AppointmentsPage } from '../pages/appointments'
import { ProfilePage } from '../pages/profile'
import { ProtectedRoute } from '../components/auth/protected-route'

export function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        
        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  )
}
