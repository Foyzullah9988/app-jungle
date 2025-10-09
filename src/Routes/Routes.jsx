import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../Components/AppCard';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import Root from '../Layout/Root';
import ErrorPage from '../Pages/ErrorPage';
import AppDetails from '../Pages/AppDetails';
import Spinner from '../Components/Spinner';
import PageNotFound from '../Components/PageNotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement:<ErrorPage/>,
        hydrateFallbackElement:<Spinner/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/apps',
                element: <Apps />
            },
            {
                path: '/installation',
                element: <Installation />
            },
            {
                path:'/apps/:pId',
                element:<AppDetails/>
            }
        ]
    },
    {
        path:'/notFound',
        Component: PageNotFound
    }

]);

