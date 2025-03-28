import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import CreateLesson from '../subPages/homepage/CreateLesson';
import ProtectedRoute from '../components/ProtectedRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <MainLayout title="Dashboard">
                    <Home />
                </MainLayout>
            </ProtectedRoute>
        )
    },
    {
        path: '/create-lesson',
        element: (
            <ProtectedRoute>
                <MainLayout title="Create Lesson Plan">
                    <CreateLesson />
                </MainLayout>
            </ProtectedRoute>
        )
    }
]);