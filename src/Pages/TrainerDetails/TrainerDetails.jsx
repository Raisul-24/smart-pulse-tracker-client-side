import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import ReactiveButton from "reactive-button";


const TrainerDetails = () => {
   const trainer = useLoaderData();
   const [selectedTime, setSelectedTime] = useState(null);

   const handleTimeSelect = (time) => {
      setSelectedTime(time);
   };
   const isButtonDisabled = !selectedTime;
   return (
      <div className="pt-24">
         <h2 className="text-3xl text-center font-bold mb-10">Trainer Details</h2>
         <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-28">
               <img src={trainer.profileImage} className="max-w-sm rounded-lg shadow-2xl" />
               <div className="">
                  <h1 className="text-3xl md:text-5xl font-bold">Name: {trainer.trainerName}</h1>
                  <p className="py-3 text-xl md:text-3xl font-semibold">Experience: {trainer.yearsOfExperience}</p>
                  <p className="text-lg font-semibold">Email: {trainer.email}</p>
                  <div className="my-3">
                     <h2 className="text-xl font-bold">Skills:</h2>
                     <div className="flex gap-x-2">
                        {
                           trainer.skills.map((skill, index) =>
                              <p key={index} className=" font-medium">{skill}</p>)
                        }
                     </div>
                  </div>
                  <div className="pb-3">
                     <h2 className="text-xl font-bold">Available TimeSlot:</h2>
                     <select onChange={(e) => handleTimeSelect(e.target.value)} defaultValue="default">
                        <option value="default" disabled>Select a time slot</option>
                        {trainer.availableTimeSlots.map((time, index) => (
                           <option key={index} value={time}>{time}</option>
                        ))}
                     </select>
                     {!selectedTime && <p className="text-red-600 font-medium text-xs">Please select a time slot first...</p>}
                  </div>
                  <Link to={`/bookTrainer?time=${encodeURIComponent(selectedTime)}&trainerInfo=${encodeURIComponent(JSON.stringify(trainer.trainerName))}`} disabled={isButtonDisabled}> 
                     <ReactiveButton idleText="Book Now!!" shadow></ReactiveButton>
                  </Link>

                  <h2 className="font-semibold my-2 mt-4">Connect with me</h2>
                  <div className="flex gap-7 items-center">
                     <Link to='https://www.twitter.com'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-400"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                     <Link to='https://www.instagram.com'><FaInstagram className="w-7 h-7 text-pink-500" /> </Link>
                     <Link to='https://www.facebook.com'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-sky-600"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TrainerDetails;