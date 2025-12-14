import { useEffect } from 'react'; // Add this import
import Navbar from '../Components/AboutUs/Navbar';
import Banner from '../Components/Projects/CoffeeMango/Banner';
import Location from '../Components/Projects/CoffeeMango/Location';
import Ownership from '../Components/Projects/CoffeeMango/Ownership';
import Highlights from '../Components/Projects/Coffee/Highlights';
import Tourist from '../Components/Projects/CoffeeMango/Tourist';
import Gallery from '../Components/Projects/Coffee/Gallery';
import Benefits from '../Components/Projects/CoffeeMango/Benefits';
import NearBy from '../Components/Projects/CoffeeMango/NearBy';
import WhyUs from '../Components/Projects/CoffeeMango/WhyUs';
import AboutDeveloper from '../Components/Projects/CoffeeMango/AboutDeveloper';
import OtherProjects from '../Components/Projects/CoffeeMango/OtherProjects';
import WorkTogether from '../Components/HomeMain/WorkTogether';
import Footer from '../Components/Common/Footer';

import coffeeBanner from "../assets/ProjectViewMain3.png";



const Coffee = () => {
    
    // Add this useEffect for dynamic title
    useEffect(() => {
        document.title = 'Coffee Farm - Premium Coffee Plantation Investment';
    }, []);
    

    const heading = "Arony Coffee Farm";
    const description = "Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India's most sought-after agroforestry corridor. Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.";

    const headingOne = "Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India's most sought-after agroforestry corridor.";
    const headingTwo = "Coffee Interactive Map";

    const otherHeading = "Arony Coffee Farm";
    const otherDescription = "Arony Coffee Farm offers investors a rare opportunity to own and profit from managed mango cultivation in India's most sought-after agroforestry corridor.";


    return (
        <div>
            <Navbar />
            <Banner heading={heading} description={description} banner={coffeeBanner} />
            <Location headingOne={headingOne} headingTwo={headingTwo} />
            <Ownership />
            <Highlights />
            <Tourist />
            <Gallery />
            <Benefits />
            <NearBy />
            <WhyUs />
            <AboutDeveloper />
            <OtherProjects otherHeading={otherHeading} otherDescription={otherDescription} />
            <WorkTogether />
            <Footer />
        </div>
    );
};

export default Coffee;