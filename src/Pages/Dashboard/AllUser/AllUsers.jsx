import { Helmet } from "react-helmet";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
// import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";


const AllUsers = () => {
   const axiosSecure = UseAxiosSecure();
   const [loading, setLoading] = useState(true);
   const { data: user = [], refetch } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await axiosSecure.get('/users');
         setLoading(false)
         return res.data;
      }
   })
   // console.log(user)
   if(loading){
      <progress className="progress progress-secondary w-56"></progress>
   }

   const handleMakeAdmin = user => {
      axiosSecure.patch(`/users/admin/${user._id}`)
         .then(res => {
            // console.log(res.data)
            if (res.data.modifiedCount > 0) {
               refetch();
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is an Admin Now!`,
                  showConfirmButton: false,
                  timer: 1500
               });
            }
         })
   }

   const handleDeleteUser = user => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {
            axiosSecure.delete(`/users/${user._id}`)
               .then(res => {
                  if (res.data.deletedCount > 0) {
                     refetch();
                     Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                     });
                  }
               })
         }
      });
   }
   return (
      <div>
         <Helmet>
            <title>SmartPulse Tracker | Dashboard | All Users</title>
         </Helmet>
         <div className="bg-white py-4 rounded-xl text-black font-bold">
            <div className="pl-16 mb-8">
               <h2 className="text-4xl">Total Users: {user.length} </h2>
            </div>
            <div className="overflow-x-auto rounded-t-xl mx-16">
               <table className="table">
                  <thead className= "bg-lime-400 rounded-t-xl text-base text-white font-semibold">
                     <tr>
                        <th>
                        </th>
                        <th> Name</th>
                        <th> Email</th>
                        <th>Role</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody className="text-base font-normal">
                     {
                        user.map((user, index) => <tr key={user._id}>
                           <th>
                              {index + 1}
                           </th>

                           <td>
                              {user.name}
                           </td>
                           <td>{user.email}</td>
                           <td>
                              {user.role === 'admin' ? 'Admin' : <button
                                 onClick={() => handleMakeAdmin(user)}
                                 className="w-10 h-10 text-white text-2xl rounded-xl flex justify-center items-center bg-green-400">
                                 <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                              </button>}
                           </td>
                           <th>
                              <div className=" bg-red-400 w-10 h-10 text-white text-2xl rounded-xl flex justify-center items-center">
                                 <button 
                                 onClick={() => handleDeleteUser(user)}
                                 >
                                    <RiDeleteBin5Fill />
                                 </button>
                              </div>
                           </th>
                        </tr>)
                     }

                  </tbody>

               </table>
            </div>
         </div>
      </div>
   );
};

export default AllUsers;