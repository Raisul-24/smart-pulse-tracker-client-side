import { useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { Helmet } from "react-helmet";
import { useState } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const BookTrainer = () => {
   const location = useLocation();
   const params = new URLSearchParams(location.search);
   const selectedTime = params.get('time');
   const trainerInfo = params.get('trainerInfo');

      // console.log(selectedTime)
      // console.log(trainerInfo)
      const { user } = UseAuth();
      const [selectedPlan, setSelectedPlan] = useState(null);
      const axiosSecure= UseAxiosSecure()

      const plans = [
         {
            name: 'Silver Plan',
            price: '50',
            classesIncluded: 5,
            facilities: ['Access to basic classes', 'Basic fitness assessment'],
         },
         {
            name: 'Gold Plan',
            price: '75',
            classesIncluded: 8,
            facilities: ['Access to premium classes', 'Advanced fitness assessment', 'Personalized workout plan'],
         },
         {
            name: 'Diamond Plan',
            price: '100',
            classesIncluded: 12,
            facilities: ['Access to all classes', 'Customized nutrition plan', 'Personal training sessions'],
         },
      ];
      const handleSubmit =  async (e) => {
         e.preventDefault();
         // console.log('Submit button clicked!');
         const trainer = trainerInfo.match(/"([^"]*)"/)[1];
         const formData = {
            userEmail: user.email,
            trainerName: trainer,
            availableSlot: selectedTime,
            selectedPlan: selectedPlan,
         };
         console.log(formData)
         const bookRes = await axiosSecure.post('/bookings', formData);
         // console.log(bookRes.data)
         if(bookRes.data.insertedId){
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Your booking has been saved",
               showConfirmButton: false,
               timer: 1500
             });
         }
      }
      return (
         <div className="pt-24">
            <Helmet>
               <title>SmartPulse Tracker | Book-Trainer</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-4 px-4 md:px-40">
                  <div className="form-control md:w-full">
                     <label className="label">
                        <span className="label-text text-black font-bold">Your Email</span>
                     </label>
                     <label className="input-group ">
                        <input type="text" placeholder={user.email}
                           className="input input-bordered w-full bg-white" readOnly />
                     </label>
                  </div>
                  <div className="form-control md:w-full">
                     <label className="label">
                        <span className="label-text text-black font-bold">Trainer Name</span>
                     </label>
                     <label className="input-group">
                        <input type="text" placeholder={trainerInfo}
                           className="input input-bordered w-full bg-white" />
                     </label>
                  </div>
                  <div className="form-control md:w-full">
                     <label className="label">
                        <span className="label-text text-black font-bold">Selected Time Slot</span>
                     </label>
                     <label className="input-group">
                        <input type="text" placeholder={selectedTime}
                           className="input input-bordered w-full bg-white" />
                     </label>
                  </div>

               </div>
               <div className="from-control w-full px-4 md:px-40 my-6">
                  <p className="text-lg font-semibold">Select a Plan:</p>
                  {plans.map((plan) => (
                     <div key={plan.name} >
                        <label className="font-bold text-lime-900">
                           <input
                              type="radio"
                              value={plan.name.toLowerCase()}
                              checked={selectedPlan === plan.name.toLowerCase()}
                              onChange={() => setSelectedPlan(plan.name.toLowerCase())}
                           />
                           {plan.name}
                        </label>
                        <div className="px-5 mb-2">
                           <p>Price: ${plan.price}</p>
                           <p>Classes Included: {plan.classesIncluded}</p>
                           <p>Facilities: {plan.facilities.join(', ')}</p>
                        </div>
                        <hr />
                     </div>
                  ))}
                  <div className="flex justify-center">
                     <input type="submit" value='Join Now!!' className="btn btn-outline btn-success my-4 btn-wide" />
                  </div>

               </div>
            </form>
         </div>
      );
   };

   export default BookTrainer;