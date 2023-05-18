import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import Register from '../Pages/Login/Register';
import Login from '../Pages/Login/Login';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: '/blog'
            
        }
      ]
    },
  ]);

const Routes = () => {
    return (
        <div>
            
        </div>
    );
};

export default router;