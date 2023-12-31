import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Trainer from "../Pages/Trainer/Trainer";
import Classes from "../Pages/Classes/Classes";
import Community from "../Pages/Community/Community";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TrainerDetails from "../Pages/TrainerDetails/TrainerDetails";
import BeTrainer from "../Pages/BeTrainner/BeTrainer";
import PrivateRoute from "./PrivateRoute";
import BookTrainer from "../Pages/BookTrainer/BookTrainer";
import DashBoardLayout from "../Layout/DashBoardLayout";
import AllUsers from "../Pages/Dashboard/AllUser/AllUsers";
import AllTrainers from "../Pages/Dashboard/AllTrainers/AllTrainers";
import AllSubscribers from "../Pages/Dashboard/AllSubscibers/AllSubscribers";
import Payment from "../Pages/Payment/Payment";
import AdminRoute from "./AdminRoute";
import AllAppliedTrainers from "../Pages/Dashboard/AllAppliedTrainers/AllAppliedTrainers";
import UserDashboard from "../Pages/Dashboard/UserDashBoard/UserDashboard";
import AdminDashboard from "../Pages/Dashboard/AdminDashBoard/AdminDashboard";
import RecommendedClasses from "../Pages/Dashboard/RecommendedClasses/RecommendedClasses";
import ProfileSettings from "../Pages/Dashboard/ProfileSettings/ProfileSettings";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";


 const router = createBrowserRouter([
   {
     path: "/",
     errorElement:<Error></Error>,
     element: <MainLayout></MainLayout>,
     children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'gallery',
        element: <Gallery></Gallery>
      },
      {
        path: 'trainer',
        element: <Trainer></Trainer>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'community',
        element: <Community></Community>
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
        path: 'details/:id',
        element: <TrainerDetails></TrainerDetails>,
        loader: ({params}) => fetch(`https://fitness-tracker-server-side.vercel.app/trainers/${params.id}`)
      },
      {
        path: 'beTrainer',
        element: <PrivateRoute><BeTrainer></BeTrainer></PrivateRoute>
      },
      {
        path: 'bookTrainer',
        element: <PrivateRoute><BookTrainer></BookTrainer></PrivateRoute>,
      },
      // dashboard
      {
        path: 'dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
          // user
          {
            path: 'userDashboard',
            element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>
          },
          {
            path: 'recommendedClasses',
            element: <PrivateRoute><RecommendedClasses></RecommendedClasses></PrivateRoute>
          },
          {
            path: 'profileSettings',
            element: <PrivateRoute><ProfileSettings></ProfileSettings></PrivateRoute> 
          },
          // admin
          {
            path: 'adminDashboard',
            element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
          },
          {
            path: 'allUsers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
          },
          {
            path: 'allTrainers',
            element: <AdminRoute><AllTrainers></AllTrainers></AdminRoute>
          },
          {
            path: 'allSubscribers',
            element: <AdminRoute><AllSubscribers></AllSubscribers></AdminRoute>
          },
          {
            path: 'appliedTrainers',
            element: <AdminRoute><AllAppliedTrainers></AllAppliedTrainers></AdminRoute>
          },
          {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
          }
        ]
      }
     ],
   },
   {
    path: '/payment',
    element: <Payment></Payment>
   }
 ]);


export default router;