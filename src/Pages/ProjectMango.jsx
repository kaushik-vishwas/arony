import { useEffect } from 'react'; // Add this import
import Navbar from '../Components/AboutUs/Navbar'
import Footer from '../Components/Common/Footer'
import ProjectViewMain from '../Components/ProjectMango/ProjectViewMain'
import Location from '../Components/ProjectMango/Location'
import AreaLayout from '../Components/ProjectViewPage/AreaLayout'
import Configration from '../Components/ProjectViewPage/Configration'
import CropDetails from '../Components/ProjectViewPage/CropDetails'
import Ownership from '../Components/ProjectViewPage/Ownership'
import Highlights from '../Components/ProjectMango/Highlights'
import Tourist from '../Components/ProjectMango/Tourist'
import Gallery from '../Components/ProjectMango/Gallery'
import Benefits from '../Components/ProjectViewPage/Benefits'
import NearBy from '../Components/ProjectMango/NearBy'
import WhyUs from '../Components/ProjectViewPage/WhyUs'
import AboutDeveloper from '../Components/ProjectViewPage/AboutDeveloper'
import OtherProjects from '../Components/ProjectMango/OtherProjects'
import WorkTogether from '../Components/ProjectViewPage/Together'
import Faq from '../Components/ProjectMango/Faq'
import Video from '../Components/ProjectViewPage/Video'


const ProjectMango = () => {
    
    // Add this useEffect - it's just 3 lines!
    useEffect(() => {
        document.title = 'Hampi Highland Mango Farm - Arony Farms';
    }, []);
    

    const faagContent = "Hampi Highland is a naturally rich farmland surrounded by the historic charm of Hampi. The soil here supports excellent growth for both premium mango varieties and long term sandalwood cultivation. The farm is developed with water access, drip systems, and neat planning across every plot. With clean surroundings and a calm atmosphere, it offers a blend of farming value and peaceful living. Managed by experts, the farm ensures healthy plant growth, consistent care, and a rewarding farm investment for the future.";
    

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