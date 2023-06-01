
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './assets/layout/Main/Main';
import Home from './assets/pages/Home/Home';
import Login from './assets/pages/Login/Login';
import Register from './assets/pages/Register/Register';
import AuthProviders from './assets/Providers/AuthProviders';
import Order from './assets/pages/Order/Order';
import PrivateRoute from './assets/route/PrivateRoute';
import Service from './assets/pages/Service/Service';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/service",
        element: <PrivateRoute><Service></Service></PrivateRoute>
      },
      {
        path: "/order",
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
