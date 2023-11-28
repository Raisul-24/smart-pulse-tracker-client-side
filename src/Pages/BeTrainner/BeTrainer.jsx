import { Helmet } from "react-helmet";
import UseAuth from "../../hooks/UseAuth";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const BeTrainer = () => {
   const { user } = UseAuth();
   const { register, handleSubmit, setValue, reset } = useForm();
   const axiosSecure = UseAxiosSecure();
   const [selectedSkills, setSelectedSkills] = useState([]);
   const availableSkills = ["Cardio", "Strength Training", "Yoga", "Pilates", "Functional Training", "HIIT"];
   const navigate = useNavigate();

   const handleSkillToggle = (skill) => {
      if (selectedSkills.includes(skill)) {
         setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
      } else {
         setSelectedSkills((prevSkills) => [...prevSkills, skill]);
      }
   };

   useEffect(() => {
      setValue('skills', selectedSkills);
   }, [selectedSkills, setValue]);

   const onSubmit = async (data) => {
      // console.log(data)
      const [day, time ] = [data.day, data.time];
      const availableTimeSlots = `${day} ${time}`;

      // console.log(availableTimeSlots);
      const newTrainer = {
         trainerName: data.trainerName,
         age: data.age,
         email: data.email,
         skills: data.skills,
         profileImage: data.profileImage,
         availableTimeSlots,
      }
      // console.log(newTrainer)

   const trainerNew = await axiosSecure.post('/applyTrainers', newTrainer);
   // console.log(trainerNew.data)
   if (trainerNew.data.insertedId) {
      reset();
      Swal.fire({
         position: "top-end",
         icon: "success",
         title: "You've successfully applied!!",
         showConfirmButton: false,
         timer: 1500
      });
      navigate('/trainer')
   }
}


return (
   <div className="pt-24">
      <Helmet>
         <title>SmartPulse Tracker | Apply-Trainer</title>
      </Helmet>

      <div>
         <div className="bg-[#F3F3F3] py-4 rounded-xl text-black font-bold px-4 md:px-16 mb-12">
            <h2 className="text-4xl text-center font-bold pt-8">Become a Trainer</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="form-control w-full mt-6">
                  <label className="label">
                     <span className="label-text text-black font-bold">Name*</span>
                  </label>
                  <input
                     type="text"
                     placeholder="Enter your name..."
                     {...register('trainerName', { required: true })}
                     className="input input-bordered w-full bg-white" />
               </div>
               <div className="form-control w-full my-6">
                  <label className="label">
                     <span className="label-text text-black font-bold">Email*</span>
                  </label>
                  <input type="email" placeholder={user?.email} defaultValue={user.email}
                     {...register('email')}
                     className="input input-bordered w-full bg-white" readOnly />
               </div>
               <div className="flex gap-x-8">
                  <div className="form-control w-full">
                     <label className="label">
                        <span className="label-text text-black font-bold">Age*</span>
                     </label>
                     <input type="number" placeholder="Enter your age...."
                        {...register('age', { required: true })}
                        className="input input-bordered w-full bg-white" />
                  </div>
                  <div className="form-control w-full">
                     <label className="label">
                        <span className="label-text text-black font-bold">Upload Profile Image*</span>
                     </label>
                     <input type="text" placeholder="Enter profile picture link...."
                        {...register('profileImage', { required: true })}
                        className="input input-bordered w-full bg-white" />
                  </div>
               </div>
               <div className="form-control my-6">
                  <label className="label">
                     <span className="label-text text-black font-bold">Skills</span>
                  </label>
                  <div className="flex-col">
                     {availableSkills.map((skill) => (
                        <label key={skill} className="mr-2">
                           <input
                              className="mr-1"
                              type="checkbox"
                              value={skill}
                              checked={selectedSkills.includes(skill)}
                              onChange={() => handleSkillToggle(skill)}
                           />
                           {skill}
                        </label>
                     ))}
                  </div>
               </div>
               <div className="md:flex gap-x-8">
                  <div className="form-control w-full">
                     <label className="label">
                        <span className="label-text text-black font-bold">Available Time in a week*</span>
                     </label>
                     <input type="text" placeholder="Enter day name...."
                        {...register('day', { required: true })}
                        className="input input-bordered w-full bg-white" />
                  </div>
                  <div className="form-control w-full">
                     <label className="label">
                        <span className="label-text text-black font-bold">Available Time in a day*</span>
                     </label>
                     <input type="text" placeholder="Enter time slot like (9:00 AM - 10:00 AM)...."
                        {...register('time', { required: true })}
                        className="input input-bordered w-full bg-white" />
                  </div>
               </div>

               <div className="flex justify-center py-10">
                  <button className="btn text-black font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500">
                     Apply Now!!<FaUpload className="ml-4"></FaUpload>
                  </button>
               </div>
            </form>
         </div>
      </div>
   </div>
);
};

export default BeTrainer;