import { AiFillDislike, AiFillLike } from "react-icons/ai";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Forum = () => {
   const axiosPublic = UseAxiosPublic();
   const [forum, setForum] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      axiosPublic.get('/forum')
         .then(res => {
            setForum(res.data);
            setLoading(false);
         })
   }, [axiosPublic]);
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);
   return (
      <div className="my-10">
         {
            loading ?
               <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
               </div>
               :
               <div> <h2 className="text-4xl text-center text-black font-extrabold">Latest Forum Discussion</h2>
                  {
                  forum.posts.map((post) => <div key={post._id} className="my-3 container mx-auto border-b-2" data-aos="fade-up"
                  data-aos-duration="1000">
                     <h2 className=" text-black font-semibold "><span className="font-bold">Title:</span> {post.title}</h2>
                     <h2 className="text-medium text-red-400 font-medium"> Question: {post.question}</h2>
                     <p className="text-black">Answer: {post.answer}</p>
                     <div className="flex items-center gap-x-5 mb-2 text-black">
                        <div className="flex items-center gap-x-1">
                           <AiFillLike></AiFillLike><h2>{post.upvotes}</h2>
                        </div>
                        <div className="flex items-center gap-x-2">
                           <AiFillDislike></AiFillDislike> <h2>{post.downvotes}</h2>
                        </div>
                     </div>
                  </div>)
                  }
               </div>
         }
      </div>
   );
};

export default Forum;