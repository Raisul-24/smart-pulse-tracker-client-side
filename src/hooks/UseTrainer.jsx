
import UseAuth from './UseAuth';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const UseTrainer = () => {
   const {user, loading} = UseAuth();
   const axiosSecure = UseAxiosSecure();
   const {data: isTrainer, isPending: isTrainerLoading} = useQuery({
      queryKey: [user?.email, 'isTrainer'],
      enabled: !loading,
      queryFn: async() =>{
         const res = await axiosSecure.get(`/users/trainer/${user.email}`);
         console.log(res.data);
         return res.data?.admin;
      }
   })
   return [isTrainer, isTrainerLoading]
};
export default UseTrainer;