import Navbar from '../Components/AboutUs/Navbar';
import AboutMain from '../Components/AboutUs/AboutMain';
import Gateway from '../Components/AboutUs/Gateway';
import AboutMain1 from '../Components/AboutUs/AboutMain1';
import Message from '../Components/AboutUs/Message';
import WhyChooseUs from '../Components/AboutUs/WhyChooseUs';
import WorkTogether from '../Components/HomeMain/WorkTogether';
import Footer from '../Components/Common/Footer';



const AboutUs = () => {

  return (
    <div>
      <Navbar />
      <AboutMain />
      <Gateway />
      <AboutMain1 />
      <Message />
      <WhyChooseUs />
      <WorkTogether />
      <Footer />
    </div>
  );
};

export default AboutUs;