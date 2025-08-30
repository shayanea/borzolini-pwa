import { AppointmentsPage, DashboardPage, HomePage, LoginPage, ProfilePage, RegisterPage } from '../pages';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components/layout';
import { ProtectedRoute } from '../components/auth/protected-route';

export function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='appointments' element={<AppointmentsPage />} />
          <Route path='profile' element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
}
