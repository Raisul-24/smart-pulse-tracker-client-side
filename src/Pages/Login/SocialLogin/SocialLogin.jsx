import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import UseAuth from "../../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";

const SocialLogin = () => {
   const { googleSignIn, githubSignIn } = UseAuth();
   const axiosPublic = UseAxiosPublic();

   const navigate = useNavigate();
   const location = useLocation();

   const from = location.state?.from?.pathname || "/";
   // console.log('state in the location login page', location.state)

   const handleGoogleSignIn = () => {
      googleSignIn()
         .then(result => {
            toast.success('Sign In with Google Successfully');
            console.log(result.user);
            const userInfo = {
               email: result.user?.email,
               name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
               .then(res => {
                  console.log(res.data);
                  if (location.state && location.state.from) {
                     navigate(location.state.from.pathname)
                  }
                  else {
                     navigate(from, { replace: true });
                  }
               })
         })
   }
   const handleGithubSignIn = () => {
      githubSignIn()
         .then(result => {
            toast.success('Sign In with Github Successfully');
            console.log(result.user);
            const userInfo = {
               email: result.user?.email,
               name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
               .then(res => {
                  console.log(res.data);
                  if (location.state && location.state.from) {
                     navigate(location.state.from.pathname)
                  }
                  else {
                     navigate(from, { replace: true });
                  }
               })
         })
   }
   return (
      <div className="flex justify-center my-5 w-full gap-x-5">
         <div className="rounded-full text-4xl bg-slate-300 btn w-1/4" onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></div>
         <div className="rounded-full btn text-4xl bg-slate-300 w-1/4" onClick={handleGithubSignIn}><FaGithub className="text-black"></FaGithub></div>
      </div>
   );
};

export default SocialLogin;