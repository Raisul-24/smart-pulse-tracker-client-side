import { useEffect, useState } from "react";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";


const Community = () => {
   const axiosPublic = UseAxiosPublic();
   const [forum, setForum] = useState([]);
   const [loading, setLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);
   useEffect(() => {
      axiosPublic.get(`/forum?page=${currentPage}`)
         .then(res => {
            setForum(res.data);
            setCurrentPage(res.data.currentPage);
            setLoading(false);
            // console.log(res.data)
         })
   }, [axiosPublic, currentPage]);
   // console.log(currentPage)

   const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= 4) {
         setCurrentPage(newPage);
         // console.log(currentPage)
      }
   };

   return (
      <div className="pt-24">
         {
            loading ?
               <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
               </div>
               :
               <div> <h2 className="text-4xl text-center text-black  font-extrabold">Our Community</h2>
                  {forum.posts.map((post) => <div key={post._id} className="my-10 container mx-auto border-b-2 pb-6">

                     <h2 className="text-lg text-black font-semibold "><span className="font-bold">Title:</span> {post.title}</h2>
                     <h2 className="text-medium text-red-400 font-medium"> Question: {post.question}</h2>
                     <p className="text-black">Answer: {post.answer}</p>
                     <div className="flex items-center gap-x-5 mt-4 mb-2 text-black">
                        <h2 className="font-bold  text-sm">Vote Now!!!</h2>
                        <div className="flex items-center gap-x-1">
                           <AiFillLike></AiFillLike><h2>{post.upvotes}</h2>
                        </div>
                        <div className="flex items-center gap-x-2">
                           <AiFillDislike></AiFillDislike> <h2>{post.downvotes}</h2>
                        </div>
                     </div>
                     <div className="flex justify-start gap-5 ">
                        <button  
                        // onClick={() => handleVote(post._id, 'upvotes')}
                         className="btn btn-outline btn-sm btn-success">Up-Vote </button>
                        <button  
                        // onClick={() => handleVote(post._id, 'downvotes')}
                         className="btn btn-outline btn-sm btn-error">Down-Vote </button>
                     </div>
                     
                  </div>)}
                  <div className="flex justify-center gap-x-3 my-8">
                  <button
                     className="btn btn-sm btn-outline"
                     onClick={() => handlePageChange(currentPage - 1)}
                  >
                     &lt; Prev
                  </button>
                  <button
                     className="btn btn-sm btn-outline"
                     onClick={() => handlePageChange(currentPage + 1)}
                  >
                     Next &gt;
                  </button>
               </div>
               </div>
         }
      </div>
   );
};

export default Community;