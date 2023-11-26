// import React from 'react';

import { Link } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { toast } from "react-hot-toast";

const Navbar = () => {
   const { user, logOut } = UseAuth();

   // const {isAdmin} = UseAdmin();

   const handleLogOut = async () => {
      try {
         logOut()
         toast.success('Log Out Successfully!!');
      } catch (error) {
         toast.error(error.message);
      }
   }
   // console.log(user)
   const navLinks = <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/gallery'>Gallery</Link></li>
      {/* {
         user && isAdmin ? <li><Link to='/dashboard/adminDashBoard'>Dash Board</Link></li>
         :
         <li><Link to='/dashBoard/userDashBoard'>Dash Board</Link></li>
      } */}
      {/* {
         user && !isAdmin && <li><Link to='/dashBoard/userDashBoard'>Dash Board</Link></li>
      } */}
      <li><Link to='/trainer'>Trainer</Link></li>
      <li><Link to='/classes'>Classes</Link></li>
      <li><Link to='/dashboard'>DashBoard</Link></li>
      <li><Link to='/community'>Community</Link></li>
      {/* photoURL */}
      {
         user &&
            <div className="dropdown dropdown-end hidden lg:flex">
               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                     {
                        user?.photoURL ? <img src={user?.photoURL} /> :
                        <img src="https://i.ibb.co/B3X9TBd/pngtree-vector-administration-icon-png-image-747092.jpg" />
                     }
                     </div>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 text-xs">
                  <li><a>{user?.displayName}</a></li>
                  <li><a>{user.email}</a></li>
               </ul>
            </div> 

      }
      {
         user ?
            <li><Link onClick={handleLogOut} >Logout</Link></li>
            : <li><Link to='/login'>Login</Link></li>
      }
   </>
   return (
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-2xl bg-slate-200">
         <div className="navbar-start ">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black font-semibold">
                  {navLinks}
               </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl font-semibold lg:font-extrabold text-cyan-500">SmartPulse<span>Tracker</span></Link>
         </div>
         <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-black font-bold">
               {navLinks}

            </ul>
         </div>
      </div>
   );
};

export default Navbar;