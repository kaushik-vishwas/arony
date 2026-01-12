import Navbar from '../Components/AboutUs/Navbar';
import Footer from '../Components/Common/Footer.jsx';
import HeroSection from "../Components/Inhouse/HeroSection";
import WhyFarmlandSection from "../Components/Inhouse/WhyFarmlandSection";
import AboutAronyFarm from "../Components/Inhouse/AboutAronyFarm"
import HowItWorksSection from "../Components/Inhouse/HowItWorksSection";
import FeaturedProjects from "../Components/Inhouse/FeaturedProjects"
import OurGrowth from "../Components/Inhouse/OurGrowth"
import StartYourInvestmentJourney from "../Components/Inhouse/StartYourInvestmentJourney.jsx"
import ReadyToInvestCTA from "../Components/Inhouse/ReadyToInvestCTA.jsx"

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <WhyFarmlandSection />
      <AboutAronyFarm />
      <HowItWorksSection />
      <FeaturedProjects />
      <OurGrowth />
      <StartYourInvestmentJourney />
      <ReadyToInvestCTA />
      <Footer />
    </>
  );
}
