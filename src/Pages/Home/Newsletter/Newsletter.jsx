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
         <div className="hero h-[500px] bg-white rounded-xl mb-36 md:mb-2">
            <div className="hero-content flex-col lg:flex-row-reverse md:gap-52">
               <div className="text-center lg:text-left">
                  <TypeAnimation className=" font-bold text-orange-500"
                     sequence={[
                        '-Subscribe Now!!!',
                        1000,
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
                  <p className="py-6 hidden md:flex">Join the SmartPulse Tracker community, where fitness meets inspiration, and where your journey to a better you becomes an incredible adventure. <br />
                     Remember, your pulse is the rhythm of your life—let SmartPulse Tracker help you make it extraordinary. Subscribe today and start thriving.</p>
               </div>
               <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-lime-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" 
                        placeholder="Enter your name...." 
                        {...register("name", { required: true })}
                        className="input input-bordered bg-white"/>
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" 
                        {...register("email", {required: true})}
                         placeholder="Enter your email...." className="input input-bordered bg-white"/>
                     </div>
                     
                     <div className="form-control mt-6">
                        <input type="submit" value='Subscribe Now!!' className="btn btn-outline btn-info" />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Newsletter;