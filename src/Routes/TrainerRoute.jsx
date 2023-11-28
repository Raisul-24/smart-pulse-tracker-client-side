/* eslint-disable react/prop-types */
// import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../hooks/UseAuth';
import UseAdmin from '../hooks/UseAdmin';

const TrainerRoute = ({children}) => {
   const { user, loading } = UseAuth();
   const [isAdmin, isAdminLoading] = UseAdmin();
   const location = useLocation();

   if (loading || isAdminLoading) {
       return <progress className="progress w-56"></progress>
   }

   if (user && isAdmin) {
       return children;
   }

   return <Navigate to="/" state={{ from: location }} replace></Navigate>
}

export default TrainerRoute;