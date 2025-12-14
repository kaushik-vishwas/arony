import Navbar from '../Components/AboutUs/Navbar';
import HomeMain from '../Components/HomeMain/HomeMain';
import AboutUs from '../Components/HomeMain/AboutUs';
import NewKeyPillars from '../Components/HomeMain/NewKeyPillars';
import WhyChooseUs from '../Components/HomeMain/WhyChooseUs';
import Approach from '../Components/HomeMain/Approch';
import OurProjects from '../Components/HomeMain/OurProjects';
import ChooseUs from '../Components/HomeMain/ChooseUs';
import Testimonials from '../Components/HomeMain/Testimonals';
import Investors from '../Components/HomeMain/Investors';
import Blogs from '../Components/HomeMain/Blogs';
import WorkTogether from '../Components/HomeMain/WorkTogether';
import FaqAbove from '../Components/HomeMain/FaqAbove';
import Faq from '../Components/HomeMain/Faq';
import Footer from '../Components/Common/Footer';
import Events from '../Components/HomeMain/Events'

import faqImg from '../assets/NewChanges/faqImg.jpg';


const Home = () => {

  return (
    <div>
      <Navbar />
      <HomeMain />
      <AboutUs />
      <NewKeyPillars />
      <WhyChooseUs />
      <Approach />
      <OurProjects />
      <ChooseUs />
      <Testimonials />
      <Events/>
      <Investors />
      <Blogs />
      <WorkTogether />
      <FaqAbove faqImg={faqImg} />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;