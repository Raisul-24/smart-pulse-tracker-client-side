
import { FaHome, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoardLayout = () => {

   return (
      <div className="flex py-20">
         {/* dashboard side bar  */}
         <div className="w-64 min-h-screen bg-lime-100">
            <ul className="menu p-4 text-black text-lg font-semibold">
               {
                  // isAdmin ?
                   <>
                     <li>
                        <NavLink to="/dashboard/adminDashBoard">
                           <FaHome></FaHome>
                           Admin Home</NavLink>
                     </li>
                     
                     <li>
                        <NavLink to="/dashboard/allUsers">
                           <FaUsers></FaUsers>
                           All Users</NavLink>
                     </li>
                     <li>
                        <NavLink to="/dashboard/allTrainers">
                           <FaUsers></FaUsers>
                           All Trainers</NavLink>
                     </li>
                     <li>
                        <NavLink to="/dashboard/allSubscribers">
                           <FaUsers></FaUsers>
                           All Subscribers</NavLink>
                     </li>
                     <li>
                        <NavLink to="/dashboard/appliedTrainers">
                           <FaUsers></FaUsers>
                           Applied Trainers</NavLink>
                     </li>
                  </>
                     // :
                     // <>
                     //    <li>
                     //       <NavLink to="/dashboard/userDashBoard">
                     //          <FaHome></FaHome>
                     //          User Home</NavLink>
                     //    </li>
                        

                     // </>
               }
               <div className="divider"></div>
               {/* common */}
               <li>
                  <NavLink to="/">
                     <FaHome></FaHome>
                     Home</NavLink>
               </li>
            </ul>
         </div>
         {/* dashboard content */}
         <div className="flex-1 p-8 bg-orange-50">
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default DashBoardLayout;