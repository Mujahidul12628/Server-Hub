/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './assets/CommonLayout/MainLayout/MainLayout.jsx';
import Home from './assets/Component/Home/Home.jsx';
import Blog from './assets/Component/Blog/Blog.jsx';
import AllToys from './assets/Component/AllToys/AllToys.jsx';
import MyToys from './assets/Component/MyToys/MyToys.jsx';
import AddAToy from './assets/Component/AddAToy/AddAToy.jsx';
import Error404 from './assets/Component/Error/Error404.jsx';
import Login from './assets/Component/Login/Login.jsx';
import Register from './assets/Component/Register/Register.jsx';
import View from './assets/Component/View/View.jsx';
import ViewDetails from './assets/Component/ViewDetails/ViewDetails.jsx';
import ToysLayout from './assets/Layout/ToysLayout/ToysLayout.jsx';
import AuthProvider from './assets/Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/allToys',
        element: <ViewDetails></ViewDetails>
      },
      {
        path: '/myToys',
        element: <MyToys></MyToys>
      },
      {
        path: '/addAToy',
        element: <AddAToy></AddAToy>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/toysData/:id',
        element: <ViewDetails></ViewDetails>
      },
      {
        path: '/view',
        element: <View></View>
      },
    ]
  },
  {
    path: '*',
    element: <Error404></Error404>
  },
  // {
  //   path: "toys",
  //   element: <ToysLayout></ToysLayout>,
  //   children: [
  //     {
  //       path: "/toys",
  //       element: <Home></Home>,
  //     },
  //     {
  //       path: ":id",
  //       element: (
  //         <PrivateRoute>
  //           <ViewDetails></ViewDetails>
  //         </PrivateRoute>
  //       ),
  //     },
  //   ],
  // },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
