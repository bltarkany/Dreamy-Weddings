import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
// pages
import ErrorPage from './pages/error.jsx';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Gallery from './pages/gallery.jsx';
import Event from './pages/event.jsx';
import Engagement from './pages/engagement.jsx';
import Contact from './pages/contact.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/engagement',
        element: <Engagement />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/events',
        element: <Event />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
