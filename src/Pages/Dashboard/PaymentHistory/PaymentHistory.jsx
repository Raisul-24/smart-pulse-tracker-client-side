import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";



const PaymentHistory = () => {
   const { user } = UseAuth();
   const axiosSecure = UseAxiosSecure();
   const { data: payments = [] } = useQuery({
      queryKey: ['payments', user.email],
      queryFn: async () => {
         const res = await axiosSecure.get(`/payments/${user.email}`)
         // console.log(res.data)
         return res.data;
      }   
   });
   return (
      <div>
         <div className="bg-white py-6 rounded-xl text-black">
            <div className="mb-8 text-center">
               <h2 className="text-xl font-semibold">Total Payments: {payments.length}</h2>
            </div>
            <div>
               <div className="overflow-x-auto rounded-t-xl mx-10">
                  <table className="table">
                     {/* head */}
                     <thead className="bg-lime-400  rounded-t-xl text-base text-white font-semibold">
                        <tr>
                           <th>
                           </th>
                           <th>Email</th>
                           <th>Transaction Id</th>
                           <th>Amount</th>
                           <th>Date</th>
                           <th>Status</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm font-normal">
                        {
                           payments.map((item, index) => <tr key={item._id}>
                              
                              <th>
                                 {index + 1}
                              </th>
                              <td>
                                 {item.email}
                              </td>
                              
                              <td>{item.transactionId}</td>
                              <td>{item.price}</td>
                              <td>{item.date.substring(0,10)}</td>
                              <td>{item.status}</td>
                           </tr>)
                        }
                     </tbody>

                  </table>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PaymentHistory;