import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const routeConfig: RouteObject[] = [
    {
        path: '/',
        element: <Suspense fallback={<PageLoader />}><MainPage /></Suspense>,
    },
    {
        path: '/about',
        element: <Suspense fallback={<PageLoader />}><AboutPage /></Suspense>,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
