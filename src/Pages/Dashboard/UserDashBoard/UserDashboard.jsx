import UseAuth from "../../../hooks/UseAuth";



const UserDashboard = () => {
   const { user } = UseAuth();
   // console.log(user);
   return (
      <div className="pt-24">
         <h2 className="text-3xl font-bold text-center">
            <span>Hi, Welcome!! </span>
            {
               user?.displayName ? user?.displayName : 'Back'
            }
         </h2>
      </div>
   );
};

export default UserDashboard;