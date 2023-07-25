import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../pages/Layout/Hom/Hom/Home";
import Instructor from "../pages/Layout/Instructor/Instructor";
import Class from "../pages/Layout/Classess/Class";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";

import MyClass from "../pages/Layout/Dashboard/MyClass.jsx/MyClass";
import Dashboard from "../pages/Layout/Dashboard/Dashboard/Dashboard";
import Payment from "../pages/Layout/Dashboard/Payment/Payment";
import EnrollClass from "../pages/Layout/Dashboard/EnrollClass/EnrollClass";
import PaymentHistory from "../pages/Layout/Dashboard/PaymentHistory/PaymentHistory";
import ManageClass from "../pages/Layout/Dashboard/IsAdmin/ManageClass/ManageClass";
import ManageUsers from "../pages/Layout/Dashboard/IsAdmin/ManageUsers/ManageUsers";
import AddClass from "../pages/Layout/Dashboard/IsInstructor/AddClass/AddClass";
import InstClass from "../pages/Layout/Dashboard/IsInstructor/InstClass/InstClass";
import Error from "../components/Error/Error";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: 'instructor',
          element: <Instructor></Instructor>
      },
      {
          path: 'classes',
          element: <Class></Class>
      },
      {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },

      ]
    },

    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
          {
              path: 'myClass',
              element: <MyClass></MyClass>
          },
          {
            path: 'payment',
            element: <Payment></Payment>
        },
        {
            path: 'enrollClass',
            element: <EnrollClass></EnrollClass>
        },
        {
            path: 'payment',
            element: <Payment></Payment>
        },
        
        {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
        },
        {
            path: 'manageClass',
            element: <ManageClass></ManageClass>
        },
        {
            path: 'manageUser',
            element: <ManageUsers></ManageUsers>
        },
        {
            path: 'addClass',
            element: <AddClass></AddClass>
        },
        {
            path: 'insClass',
            element: <InstClass></InstClass>
        },
      ]},
      {
        path: '*',
        element: <Error></Error>
    }
  ]);