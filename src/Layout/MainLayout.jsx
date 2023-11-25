import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Footer from "../SharedComponents/Footer/Footer";


const MainLayout = () => {
   return (
      <div >
         <Navbar></Navbar>
         <div className="container mx-auto">
         <Outlet></Outlet>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;