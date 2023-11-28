
import { FaBook, FaHome, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import UseAdmin from '../hooks/UseAdmin';
import { FaComputer, FaPeopleLine } from 'react-icons/fa6';

const DashBoardLayout = () => {
// TODO get isAdmin value from the database
const [isAdmin, isAdminLoading] = UseAdmin();
if (isAdminLoading) {
   <div className="">
      <span className="loading loading-spinner text-primary"></span>
   </div>
}
   return (
      <div className="flex py-20">
         {/* dashboard side bar  */}
         <div className="w-64 min-h-screen bg-lime-100">
            <ul className="menu p-4 text-black text-lg font-semibold">
               {
                  isAdmin ?
                   <>
                     <li>
                        <NavLink to="/dashboard/adminDashboard">
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
                     <li>
                        <NavLink to="/dashboard/paymentHistory">
                           <FaBook></FaBook>
                           Payment History</NavLink>
                     </li>
                  </>
                     :
                     <>
                        <li>
                           <NavLink to="/dashboard/userDashboard">
                              <FaHome></FaHome>
                              User Home</NavLink>
                        </li>
                        <li>
                           <NavLink to="/dashboard/profileSettings">
                              <FaPeopleLine></FaPeopleLine>
                              Profile Settings</NavLink>
                        </li>
                        <li>
                           <NavLink to="/dashboard/recommendedClasses">
                              <FaComputer></FaComputer>
                              Classes</NavLink>
                        </li>
                        

                     </>
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