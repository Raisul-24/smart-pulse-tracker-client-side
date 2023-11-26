import { useEffect, useState } from "react";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import Marquee from "react-fast-marquee";


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
         <h2 className="text-4xl text-center font-extrabold mb-4">Our Team</h2>
         {loading ? 
               <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
               </div>
               :
               
                  <Marquee >
                     {
                        trainers.map(trainer => <div key={trainer._id}>
                           <img src={trainer.profileImage} alt="profile-picture" className="w-96 h-60 mr-10 rounded-t-xl" />
                           <h2 className="text-center text-red-500 font-extrabold bg-slate-400 w-96 rounded-b-xl">{trainer.trainerName}</h2>
                        </div>
                         )  
                     }
                  </Marquee>
               }
      </div>
   );
};

export default Team;