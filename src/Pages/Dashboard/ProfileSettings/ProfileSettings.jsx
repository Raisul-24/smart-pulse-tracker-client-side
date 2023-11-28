
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";


const ProfileSettings = () => {
   const { user } = UseAuth();
   const axiosSecure = UseAxiosSecure();
   const { data: users = [] } = useQuery({
      queryKey: ['users', user.email],
      queryFn: async () => {
         const res = await axiosSecure.get(`/users/${user.email}`)
         console.log(res.data.name)
         return res.data;
      }  
      
   });
   console.log(users) 
   return (
      <div className="text-black">
         <h2 className="text-4xl text-center font-bold">Your Profile</h2>
         {
            users.map(person =><div key={person._id} className="m-6">
            <h2>Name: {person.name}</h2>
            <p>Email: {person.email}</p>
            {
               person.role ? <p>Role: {person.role}</p> : <p>Role: General User</p>
            }
            </div>)
         }
      </div>
   );
};

export default ProfileSettings;