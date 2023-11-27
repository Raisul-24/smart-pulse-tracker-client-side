import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Features from "./Feature/Features";
import About from "./About/About";
import Team from "./Team/Team";
import Newsletter from "./Newsletter/Newsletter";
import Testimonial from "./Testimonial/Testimonial";
import Forum from "./Forum/Forum";


const Home = () => {
   return (
      <div className="pt-20">
         <Helmet>
            <title>SmartPulse Tracker | Home</title>
         </Helmet>
         <Banner></Banner>
         <Features></Features>
         <About></About>
         <Testimonial></Testimonial>
         <Forum></Forum>
         <Newsletter></Newsletter>
         <Team></Team>

      </div>
   );
};

export default Home;