// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { FaBook, FaComment, FaUsers } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const AdminDashboard = () => {
   ChartJS.register(ArcElement, Tooltip, Legend);
   const { user } = UseAuth();
   const axiosSecure = UseAxiosSecure();

   const { data: stats = {} } = useQuery({
      queryKey: ['admin-stats'],
      queryFn: async () => {
         const res = await axiosSecure.get('/admin-stats');
         return res.data;
      }
   })
   console.log(stats)
   const data = {
      labels: ['Forums', 'Total Users', 'Total Subscribers'],
      datasets: [
         {
            data: [stats.forums, stats.users, stats.subscribers],
            backgroundColor: ['rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)'],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
         },
      ],
   };
   return (
      <div className="pt-24">
         <h2 className="text-3xl font-bold text-center text-black">
            <span>Hi, Welcome!! </span>
            {
               user?.displayName ? user?.displayName : 'Back'
            }
         </h2>
         <div className="stats shadow flex bg-white text-black justify-center my-5">

            <div className="stat">
               <div className="stat-figure text-secondary">
                  <FaComment className='text-3xl'></FaComment>
               </div>
               <div className="stat-title">Forums</div>
               <div className="stat-value">{stats.forums}</div>
               <div className="stat-desc">Jan 1st - Dec 1st</div>
            </div>

            <div className="stat">
               <div className="stat-figure text-secondary">
                  <FaUsers className='text-3xl'></FaUsers>
               </div>
               <div className="stat-title">Total Users</div>
               <div className="stat-value">{stats.users}</div>
               <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>


            <div className="stat">
               <div className="stat-figure text-secondary">
                  <FaBook className='text-3xl'></FaBook>
               </div>
               <div className="stat-title">Total Subscribers</div>
               <div className="stat-value">{stats.subscribers}</div>
               <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

         </div>
         <div className="flex justify-center">
            <div className="pie-chart-container w-96 h-96">
               < Pie data={data} className="" />;
            </div>
         </div>
      </div>
   );
};

export default AdminDashboard;