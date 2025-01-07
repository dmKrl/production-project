import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { RouteObject } from "react-router-dom";

export const routeConfig: RouteObject[] = [
    {
        path: '/',
        element: <Suspense fallback={<div>Loading...</div>}><MainPage /></Suspense>
    },
    {
        path: '/about',
        element: <Suspense fallback={<div>Loading...</div>}><AboutPage /></Suspense>
    },
] 