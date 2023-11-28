// import React from 'react';

import { useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllSubscribers = () => {
   const axiosSecure = UseAxiosSecure();
   const [loading, setLoading] = useState(true);

   const { data: subscribers = [],  } = useQuery({
      queryKey: ['subscribers'],
      queryFn: async () => {
         const res = await axiosSecure.get('/subscribers');
         setLoading(false)
         return res.data;
      }
   })
   // console.log(subscribers)
   if(loading){
      <progress className="progress progress-secondary w-56"></progress>
   }

   return (
      <div>
         <div className="bg-white py-4 rounded-xl text-black font-bold">
            <div className="pl-16 mb-8">
               <h2 className="text-4xl">Total Subscribers: {subscribers.length} </h2>
            </div>
            <div className="overflow-x-auto rounded-t-xl mx-16">
               <table className="table">
                  <thead className= "bg-lime-400 rounded-t-xl text-base text-white font-semibold">
                     <tr>
                        <th>
                        </th>
                        <th> Name</th>
                        <th> Email</th>
                     </tr>
                  </thead>
                  <tbody className="text-base font-normal">
                     {
                        subscribers.map((user, index) => <tr key={user._id}>
                           <th>
                              {index + 1}
                           </th>

                           <td>
                              {user.name}
                           </td>
                           <td>{user.email}</td>
                           
                        </tr>)
                     }

                  </tbody>

               </table>
            </div>
         </div>
      </div>
   );
};

export default AllSubscribers;