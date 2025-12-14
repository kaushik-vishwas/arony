import { useEffect } from 'react'; // Add this import
import Navbar from '../Components/AboutUs/Navbar'
import Footer from '../Components/Common/Footer'
import ProjectViewMain from '../Components/ProjectCoffee/ProjectViewMain'
import Location from '../Components/ProjectCoffee/Location'
import AreaLayout from '../Components/ProjectViewPage/AreaLayout'
import Configration from '../Components/ProjectViewPage/Configration'
import CropDetails from '../Components/ProjectViewPage/CropDetails'
import Ownership from '../Components/ProjectViewPage/Ownership'
import Highlights from '../Components/ProjectCoffee/Highlights'
import Tourist from '../Components/ProjectCoffee/Tourist'
import Gallery from '../Components/ProjectCoffee/Gallery'
import Benefits from '../Components/ProjectViewPage/Benefits'
import NearBy from '../Components/ProjectViewPage/NearBy'
import WhyUs from '../Components/ProjectViewPage/WhyUs'
import AboutDeveloper from '../Components/ProjectViewPage/AboutDeveloper'
import OtherProjects from '../Components/ProjectCoffee/OtherProjects'
import WorkTogether from '../Components/ProjectViewPage/Together'
import Faq from '../Components/ProjectCoffee/Faq'
import Video from '../Components/ProjectViewPage/Video'


const ProjectMango = () => { // Note: Component name is ProjectMango but content is coffee

    // Add this useEffect for dynamic title
    useEffect(() => {
        document.title = 'The Maland Mist';
    }, []);
    

    const faagContent = "Located across the rich coffee belts of Hassan, Sakaleshpur, and Chikkamagaluru, this farm is developed to bring out the true flavour and strength of South Indian coffee. The land is blessed with cool weather, misty mornings, and fertile soil that supports healthy coffee cultivation. Each plot is prepared with shaded planting, proper irrigation, and expert care to maintain steady growth. Managed by Arony Farm, the estate follows natural farming methods, regular maintenance, and scientific monitoring to ensure quality yields and long term farm value.";

    return (
        <div>
            <Navbar />
            <ProjectViewMain />
            <Location />
            <AreaLayout />
            <Configration />
            <Video faagContent={faagContent} />
            <CropDetails />
            <Ownership />
            <Highlights />
            <Tourist />
            <Gallery />
            <Benefits />
            <NearBy />
            <WhyUs />
            <AboutDeveloper />
            <OtherProjects />
            <WorkTogether />
            <Faq />
            <Footer />
        </div>
    );
};

export default ProjectMango;