import { useEffect, useState } from "react";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";


const Community = () => {
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

      console.log(forum)
   
console.log(forum.posts)

   return (
      <div className="pt-24">
         Total Posts: {forum.posts.length}
      </div>
   );
};

export default Community;