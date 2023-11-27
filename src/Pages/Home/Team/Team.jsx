import { useEffect, useState } from "react";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";


const Team = () => {
   const axiosPublic = UseAxiosPublic();
   const [trainers, setTrainers] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      axiosPublic.get('/trainers')
         .then(res => {
            setTrainers(res.data);
            setLoading(false);
         })
   }, [axiosPublic]);
   // console.log(trainers)
   return (
      <div className="my-10">
         <h2 className="text-4xl text-center font-extrabold mb-8 text-black">Best Trainer of the Year</h2>
         {loading ? 
               <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
               </div>
               :
               
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" >
                     {
                        trainers.map(trainer => <div key={trainer._id}>
                           <img src={trainer.profileImage} alt="profile-picture" className="w-96 h-60 mr-10 rounded-t-xl" />
                           <h2 className="text-center text-red-500 font-extrabold bg-slate-400 rounded-b-xl">{trainer.trainerName}</h2>
                        </div>
                         )  
                     }
                  </div>
               }
      </div>
   );
};

export default Team;