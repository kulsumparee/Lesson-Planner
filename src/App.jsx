import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Recent from './pages/Recent';
import Resources from './pages/Resources';
import ProtectedRoute from './components/ProtectedRoute';
import SignupForm from './authforms/SignupForm';
import LoginForm from './authforms/LoginForm';
import Settings from './pages/Settings';
import CreateLesson from './subPages/homepage/CreateLesson';
import GenerateLessonPlan from './subPages/homepage/GenerateLessonPlane';

const protectedRoutes = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/recent", element: <Recent />, title: "Recent Activities" },
  { path: "/resources", element: <Resources />, title: "My Resources" },
  { path: "/settings", element: <Settings />, title: "Settings" },
  { path: "/create-lesson", element: <CreateLesson />, title: "Lesson Plan Creation" },
  { path: "/generate-lesson", element: <GenerateLessonPlan />, title: "Lesson Plan Creation" },
];

const publicRoutes = [
  { path: "/login", element: <LoginForm />, title: "Login" },
  { path: "/signup", element: <SignupForm />, title: "Sign Up" }
];

export default function App() {
  return (
    <Router>
      <AuthProvider>
        
        <Routes>
          {/* Public Routes */}
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <MainLayout hideSidebar hideheader title={route.title}>
                  {route.element}
                </MainLayout>
              }
            />
          ))}

          {/* Protected Routes */}
          {protectedRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedRoute>
                  <MainLayout title={route.title}>
                    {route.element}
                  </MainLayout>
                </ProtectedRoute>
              }
            />
          ))}

          {/* Redirects */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}