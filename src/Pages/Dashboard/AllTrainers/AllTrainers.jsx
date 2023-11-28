// import React from 'react';

import { useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const AllTrainers = () => {
   const axiosSecure = UseAxiosSecure();
   const [loading, setLoading] = useState(true);

   const { data: trainers = [],  } = useQuery({
      queryKey: ['trainers'],
      queryFn: async () => {
         const res = await axiosSecure.get('/trainers');
         setLoading(false)
         return res.data;
      }
   })

   const handlePayment = async (userId) => {
      await axiosSecure.patch(`/trainers/${userId}`, {
         status: 'paid',
      });
      
   };
   // console.log(trainers)
   if(loading){
      <progress className="progress progress-secondary w-56"></progress>
   }

   return (
      <div>
         <div className="bg-white py-4 rounded-xl text-black font-bold">
            <div className="pl-16 mb-8">
               <h2 className="text-4xl">Total Trainers: {trainers.length} </h2>
            </div>
            <div className="overflow-x-auto rounded-t-xl mx-16">
               <table className="table">
                  <thead className= "bg-lime-400 rounded-t-xl text-base text-white font-semibold">
                     <tr>
                        <th>
                        </th>
                        <th> Name</th>
                        <th> Email</th>
                        <th> Salary</th>
                        <th> Status</th>
                        <th> Make Payment</th>
                     </tr>
                  </thead>
                  <tbody className="text-base font-normal">
                     {
                        trainers.map((user, index) => <tr key={user._id}>
                           <th>
                              {index + 1}
                           </th>

                           <td>
                              {user.name}
                           </td>
                           <td>{user.email}</td>
                           <td>{user.salary}</td>
                           <td>{user.role}</td>
                           <td>
                              <Link to={`/payment?amount=${user.salary}`}
                              ><button onClick={() => handlePayment(user._id)}
                              className="btn btn-outline btn-xs btn-info">Pay</button></Link>
                              </td>
                        </tr>)
                     }

                  </tbody>

               </table>
            </div>
         </div>
      </div>
   );
};

export default AllTrainers;