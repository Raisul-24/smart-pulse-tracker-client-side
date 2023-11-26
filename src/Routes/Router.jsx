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
        loader: ({params}) => fetch(`http://localhost:5013/trainers/${params.id}`)
      },
      {
        path: 'beTrainer',
        element: <PrivateRoute><BeTrainer></BeTrainer></PrivateRoute>
      },
      {
        path: 'bookTrainer',
        element: <PrivateRoute><BookTrainer></BookTrainer></PrivateRoute>,
      }
     ]
   },
 ]);


export default router;