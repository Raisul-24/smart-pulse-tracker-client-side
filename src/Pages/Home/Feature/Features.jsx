import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import { useEffect, useState } from "react";


const Features = () => {
   const axiosPublic = UseAxiosPublic();
   const [loading, setLoading] = useState(true);
   const [features, setFeatures] = useState([])
   useEffect(() => {
      axiosPublic.get('/features')
         .then(res => {
            // console.log(res.data);
            setFeatures(res.data)
            setLoading(false);
         })
   }, [axiosPublic])


   return (
      <div>
         <h2 className="text-4xl text-center font-bold my-6 text-black">Some Key Features</h2>
         {loading ? (
            <div className="flex justify-center items-center h-40">
               <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
            </div>)
            :
            (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3 md:p-0">
               {
                  features.map(feature => <div key={feature._id} className="card w-72 bg-white shadow-xl">
                     <figure>
                        <img src={feature.img} className="rounded-t-xl h-44 w-full" />
                     </figure>
                     <div className="card-body px-4 text-black">
                        <h2 className="card-title text-center text-base">{feature.title}</h2>
                        <p>{feature.description}</p>
                     </div>
                  </div>)
               }
            </div>)}

      </div>
   );
};

export default Features;