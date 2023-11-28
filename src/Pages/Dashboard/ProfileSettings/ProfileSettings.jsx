import { useEffect, useState } from "react";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";


const ProfileSettings = () => {
   const {user} = UseAuth();
   console.log(user)
   const [users, setUsers] = useState([]);
   const axiosSecure = UseAxiosSecure();
   useEffect(() => {
      axiosSecure.get(`/users`)
      .then(res => {
         setUsers(res.data);
         console.log(res.data)
      })
   }, [axiosSecure, user.email]);
   console.log(users)
   return (
      <div>
         
      </div>
   );
};

export default ProfileSettings;