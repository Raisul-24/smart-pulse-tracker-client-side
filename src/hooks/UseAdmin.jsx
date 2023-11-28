
import UseAuth from './UseAuth';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
   const {user, loading} = UseAuth()
   const axiosSecure = UseAxiosSecure();
   const {data: isAdmin, isPending: isAdminLoading} = useQuery({
      queryKey: [user?.email, 'isAdmin'],
      enabled: !loading,
      queryFn: async() =>{
         const res = await axiosSecure.get(`/users/admin/${user.email}`);
         console.log(res.data);
         return res.data?.admin;
      }
   })
   return [isAdmin, isAdminLoading]
};

export default UseAdmin;