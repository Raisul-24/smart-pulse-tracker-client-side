/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import UseAuth from "../../hooks/UseAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SocialLogin from "./SocialLogin/SocialLogin";


const Login = () => {
   const { register, handleSubmit, formState: { errors }, } = useForm();
   const { signIn } = UseAuth();

   const navigate = useNavigate();
   const location = useLocation();

   const from = location.state?.from?.pathname || "/";
   // console.log('state in the location login page', location.state)

   const captchaRef = useRef(null);
   const [disabled, setDisabled] = useState(true)

   useEffect(() => {
      loadCaptchaEnginge(6);
   }, [])

   const handleValidateCaptcha = (e) => {
      // const user_captcha_value = captchaRef.current.value;
      const user_captcha_value = e.target.value;
      if (validateCaptcha(user_captcha_value)) {
         setDisabled(false);
      }
   }
   const onSubmit = async (data) => {
      // console.log(data);
      const toastId = toast.loading('Logging In....');
      try {
         await signIn(data.email, data.password)
         toast.success('LogIn Successfully!!', { id: toastId })
         
         if (location.state && location.state.from) {
            navigate(location.state.from.pathname)
         }
         else {
            navigate(from, { replace: true });
         }
      } catch (error) {
         toast.error(error.message, { id: toastId })
      }
   }
  
   return (
      <div className="flex flex-col md:flex-row h-screen py-32 items-center bg-[url(https://i.ibb.co/17R85wC/authentication.png)]">
         <div className="w-1/2 flex justify-center md:justify-end">
            <img src="https://i.ibb.co/6wPjzpn/user-login.gif" className="rounded-xl hidden md:flex" alt="" />
         </div>
         <div className="w-1/2 flex justify-center">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
               <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h3 className="block  text-3xl antialiased font-extrabold leading-snug tracking-normal text-white">
                     LogIn Now!!
                  </h3>
               </div>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-8 p-6">
                     <div className="relative h-11 w-full min-w-[200px]">
                        <input type="email"
                           {...register("email", { required: true })}
                           className="w-full h-full px-3 py-3  text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        {errors.email && <span className="text-red-600 text-xs font-medium">Email is required</span>}
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                           Email
                        </label>
                     </div>
                     <div className="relative h-11 w-full min-w-[200px]">
                        <input type="password"
                           {...register("password", { required: true })}
                           className="w-full h-full px-3 py-3  text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        {errors.password && <span className="text-red-600 text-xs font-medium">Password is required</span>}
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                           Password
                        </label>
                     </div>
                     <LoadCanvasTemplate />
                     <div className=" h-11 w-full flex items-center gap-4 min-w-[200px]">
                        <input type="text"
                           onBlur={handleValidateCaptcha}
                           ref={captchaRef}
                           placeholder="Type the captcha above..."
                           className="w-full h-full px-3 py-3  text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200  text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                           required />
                     </div>
                  </div>

                  <div className="p-6 pt-0">
                     <input disabled={disabled}
                        className="block w-full select-none rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit"
                        data-ripple-light="true"
                        value="Login"
                     >
                     </input>
                     <p className="flex justify-center mt-6  text-medium antialiased font-light leading-normal text-inherit">
                        Or, Sign In with
                     </p>
                     <SocialLogin></SocialLogin>
                     <p className="flex justify-center mt-6  text-sm antialiased font-light leading-normal text-inherit">
                        Don't have an account?
                        <Link
                           to="/register"
                           className="block ml-1  text-sm antialiased font-bold leading-normal text-[#FF3811]"
                        >
                           Register
                        </Link>
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;