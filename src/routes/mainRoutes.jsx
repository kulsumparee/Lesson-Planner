import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import CreateLesson from '../subPages/homepage/CreateLesson';
import ProtectedRoute from '../components/ProtectedRoute';
import GenerateLessonPlan from '../subPages/homepage/GenerateLessonPlane';
import Upgrade from '../subPages/upgradePro/Upgrade';

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
    },

    {
        path: '/generate-lesson',
        element: (
            <ProtectedRoute>
                <MainLayout title="Create Lesson Plan">
                    <GenerateLessonPlan/>
                </MainLayout>
            </ProtectedRoute>
        )
    },
    {
        path: '/upgrade',
        element: (
            <ProtectedRoute>
                <MainLayout title="upgrade">
                    <Upgrade />
                </MainLayout>
            </ProtectedRoute>
        )
    },
]);