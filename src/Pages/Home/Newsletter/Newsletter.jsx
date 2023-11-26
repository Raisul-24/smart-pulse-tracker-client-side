import { useForm } from "react-hook-form";
import { TypeAnimation } from "react-type-animation";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import Swal from "sweetalert2";


const Newsletter = () => {
   const { register, handleSubmit, reset } = useForm();
   const axiosPublic = UseAxiosPublic();
   const onSubmit = async () =>{
      // console.log(data)
      const subscriber = await axiosPublic.post('/subscribers')
      if(subscriber.data.insertedId){
         
         Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You've successfully subscribed!!",
            showConfirmButton: false,
            timer: 1500
          });
          reset();
      }
   }
   
   return (
      <div>
         <div className="hero h-[500px] bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse gap-52">
               <div className="text-center lg:text-left">
                  <TypeAnimation className=" font-bold text-orange-500"
                     sequence={[
                        // Same substring at the start will only be typed out once, initially
                        '-Subscribe Now!!!',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        '- Subscribe to SmartPulse Tracker!!',
                        1000,
                        '- Shape your destiny with SmartPulse Tracker!!',
                        1000,
                        '- Commit to your well-being!!',
                        1000
                     ]}
                     wrapper="span"
                     speed={50}
                     style={{ fontSize: '3rem', display: 'inline-block' }}
                     repeat={Infinity}
                  />
                  <p className="py-6">Join the SmartPulse Tracker community, where fitness meets inspiration, and where your journey to a better you becomes an incredible adventure. <br />
                     Remember, your pulse is the rhythm of your life—let SmartPulse Tracker help you make it extraordinary. Subscribe today and start thriving.</p>
               </div>
               <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" 
                        placeholder="Enter your name...." 
                        {...register("name", { required: true })}
                        className="input input-bordered"/>
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" 
                        {...register("email", {required: true})}
                         placeholder="Enter your email...." className="input input-bordered"/>
                     </div>
                     
                     <div className="form-control mt-6">
                        <input type="submit" value='Subscribe Now!!' className="btn btn-outline" />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Newsletter;