import { useEffect } from 'react'; // Add this import
import Navbar from '../Components/AboutUs/Navbar';
import Banner from '../Components/Projects/CoffeeMango/Banner';
import Location from '../Components/Projects/CoffeeMango/Location';
import Glance from '../Components/Projects/Mango/Glance';
import Ownership from '../Components/Projects/CoffeeMango/Ownership';
import Highlights from '../Components/Projects/Mango/Highlights';
import Tourist from '../Components/Projects/CoffeeMango/Tourist';
import Gallery from '../Components/Projects/Mango/Gallery';
import Benefits from '../Components/Projects/CoffeeMango/Benefits';
import NearBy from '../Components/Projects/CoffeeMango/NearBy';
import WhyUs from '../Components/Projects/CoffeeMango/WhyUs';
import AboutDeveloper from '../Components/Projects/CoffeeMango/AboutDeveloper';
import OtherProjects from '../Components/Projects/CoffeeMango/OtherProjects';
import FaqAbove from '../Components/HomeMain/FaqAbove';
import Faq from '../Components/HomeMain/Faq';
import WorkTogether from '../Components/HomeMain/WorkTogether';
import Footer from '../Components/Common/Footer';

import mangoBanner from "../assets/ProjectViewMain2.png";
import faqImg from '../assets/NewChanges/faqMango.jpg';



const Mango = () => {
    
    // Add this useEffect for dynamic title
    useEffect(() => {
        document.title = 'Mango Farm - Premium Mango Plantation Investment';
    }, []);
    

    const heading = "Arony Mango Farm";
    const description = "Arony Mango Farm offers investors a rare opportunity to own and profit from managed mango cultivation in India's most sought-after agroforestry corridor. Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.";

    const headingOne = "Arony Mango Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India's most sought-after agroforestry corridor.";
    const headingTwo = "Mango Interactive Map";

    const otherHeading = "Arony Mango Farm";
    const otherDescription = "Arony Mango Farm offers investors a rare opportunity to own and profit from managed mango cultivation in India's most sought-after agroforestry corridor.";


    return (
        <div>
            <Navbar />
            <Banner heading={heading} description={description} banner={mangoBanner} />
            <Location headingOne={headingOne} headingTwo={headingTwo} />
            <Glance />
            <Ownership />
            <Highlights />
            <Tourist />
            <Gallery />
            <Benefits />
            <NearBy />
            <WhyUs />
            <AboutDeveloper />
            <OtherProjects otherHeading={otherHeading} otherDescription={otherDescription} />
            <FaqAbove faqImg={faqImg} />
            <Faq />
            <WorkTogether />
            <Footer />
        </div>
    );
};

export default Mango;