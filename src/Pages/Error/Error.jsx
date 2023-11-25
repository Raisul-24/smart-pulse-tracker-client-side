import { Link } from "react-router-dom";


const Error = () => {
   return (
      <div className="flex flex-col justify-center items-center">
         <h2 className=" text-red-500 font-bold pt-10 pb-4">404 Page Not Found!!!</h2>
         <button className="btn btn-outline btn-info "><Link to="/">Back to Home</Link></button>
         <img src="https://i.ibb.co/PGH0yJY/ee7dbf4d1ec94054c06077b88ddcd2fb.gif" alt="" className="my-5 rounded-3xl" />
      </div>
   );
};

export default Error;