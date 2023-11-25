import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";

const Trainer = () => {
   const [trainers, setTrainers] = useState([]);
   const [loading, setLoading] = useState(true);
   const axiosPublic = UseAxiosPublic();

   useEffect(() => {
      axiosPublic.get('/trainers')
         .then(res => {
            setTrainers(res.data);
            setLoading(false);
         })
   }, [axiosPublic]);
   // console.log(trainers)
   return (
      <div className="pt-20">
         <Helmet>
            <title>SmartPulse Tracker | Trainer</title>
         </Helmet>
         <h2 className="text-4xl text-center font-bold mb-16">Our Trainer</h2>
         <div className="">
            {loading ? (
               <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
               </div>)
               :
               (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                     {
                        trainers.map(trainer => (
                           <div key={trainer._id} className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                                 <img src={trainer.profileImage} alt="profile-picture" className="w-full h-full" />
                              </div>
                              <div className="px-6 py-3 text-center text-lg font-semibold  flex items-center justify-between">
                                 <h4 className="block leading-snug tracking-normal text-blue-gray-900">
                                    Name: {trainer.trainerName}
                                 </h4>
                                 <p className="block leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                                    Experience: {trainer.yearsOfExperience}
                                 </p>
                              </div>
                              <div className="px-6 pb-3">
                                 <h2 className="font-bold">Available TimeSlot:</h2>
                                 {
                                    trainer.availableTimeSlots.map((time, index) =>
                                       <p key={index} className="text-sm font-medium">{time}</p>)
                                 }
                              </div>
                              <h2 className="text-center text-sm font-semibold mb-2">Connect with me</h2>
                              <div className="flex justify-center gap-7 items-center">
                                 <Link to='https://www.twitter.com'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-400"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                                 <Link to='https://www.instagram.com'><FaInstagram className="w-7 h-7 text-pink-500" /> </Link>
                                 <Link to='https://www.facebook.com'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-sky-600"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                              </div>
                              <div className="flex justify-center pb-6 pt-3">
                                 <Link to={`/details/${trainer._id}`}><button className="btn btn-sm btn-outline btn-info">Know More</button></Link> </div>
                           </div>
                        ))
                     }
                  </div>
               )}
         <div className="flex justify-center">
            <div className="btn btn-outline btn-success btn-wide my-10"><Link to='/beTrainer'>Be a Trainer</Link></div>
         </div>
         </div>
      </div>
   );
};

export default Trainer;