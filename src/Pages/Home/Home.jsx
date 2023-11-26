import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Features from "./Feature/Features";
import About from "./About/About";
import Team from "./Team/Team";


const Home = () => {
   return (
      <div>
         <Helmet>
            <title>SmartPulse Tracker | Home</title>
         </Helmet>
         <Banner></Banner>
         <Features></Features>
         <About></About>
         <Team></Team>
      </div>
   );
};

export default Home;