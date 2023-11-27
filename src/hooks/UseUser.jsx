
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";
import { useEffect, useState } from "react";


const UseUser = () => {
   const {user} = UseAuth();
   const [users, setUsers] = useState([]);
   const axiosSecure = UseAxiosSecure();
   useEffect(() => {
      axiosSecure.get(`/users?email=${user.email}`,{withCredentials: true})
      .then(res => {
         setUsers(res.data);
         
      })
   }, [axiosSecure, user.email]);
   console.log(users)
};

export default UseUser;