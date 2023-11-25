import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Features from "./Feature/Features";
import About from "./About/About";


const Home = () => {
   return (
      <div>
         <Helmet>
            <title>SmartPulse Tracker | Home</title>
         </Helmet>
         <Banner></Banner>
         <Features></Features>
         <About></About>
      </div>
   );
};

export default Home;