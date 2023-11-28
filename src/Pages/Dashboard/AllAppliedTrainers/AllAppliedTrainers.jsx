import { useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEye } from "react-icons/fa";


const AllAppliedTrainers = () => {
   const axiosSecure = UseAxiosSecure();
   const [loading, setLoading] = useState(true);

   const { data: applyTrainers = [], } = useQuery({
      queryKey: ['applyTrainers'],
      queryFn: async () => {
         const res = await axiosSecure.get('/applyTrainers');
         setLoading(false)
         return res.data;
      }
   })
   console.log(applyTrainers)
   if (loading) {
      <progress className="progress progress-secondary w-56"></progress>
   }
   return (
      <div className="bg-white py-4 rounded-xl text-black font-bold">
         <div className="pl-16 mb-8">
            <h2 className="text-4xl">Total Application for Trainers: {applyTrainers.length} </h2>
         </div>
         <div className="overflow-x-auto rounded-t-xl mx-16">
            <table className="table">
               <thead className="bg-lime-400 rounded-t-xl text-base text-white font-semibold">
                  <tr>
                     <th>
                     </th>
                     <th> Trainer Name</th>
                     <th> Image</th>
                     <th> Show More</th>
                     <th> Action</th>
                     <th> Action</th>
                  </tr>
               </thead>
               <tbody className="text-base font-normal">
                  {
                     applyTrainers.map((user, index) => <tr key={user._id}>
                        <th>
                           {index + 1}
                        </th>

                        <td>
                           {user.trainerName}
                        </td>
                        <td>
                           {user.profileImage ? <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                 <img src={user.profileImage} alt="Avatar Tailwind CSS Component" />
                              </div>
                           </div> :
                           <p className="text-red-400">No image</p>}
                        </td>
                        <td><button onClick={() => document.getElementById('my_modal_3').showModal()}
                           className="btn btn-sm btn-outline btn-info flex justify-center items-center"> Show
                           <FaEye></FaEye></button>
                           <dialog id="my_modal_3" className="modal">
                              <div className="modal-box bg-white">
                                 <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                 </form>
                                 <h3 className="font-bold text-lg">{user.trainerName}</h3>
                                 <p className="pt-4">Email: {user.email}</p>
                                 <p >Age: {user.age}</p>
                                 <p >Available Times: {user.availableTimeSlots}</p>
                                 <p>Skills: {user.skills.map(skill => <span key={skill}>{skill}</span>)}</p>
                              </div>
                           </dialog></td>
                        <td><button className="btn btn-sm btn-outline btn-success">Confirm 
                        </button></td>
                        <td><button className="btn btn-sm btn-outline btn-error">Reject</button></td>
                     </tr>)
                  }

               </tbody>

            </table>
         </div>
      </div>
   );
};

export default AllAppliedTrainers;