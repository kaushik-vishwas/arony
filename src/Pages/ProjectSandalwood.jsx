import Navbar from '../Components/AboutUs/Navbar'
import Footer from '../Components/Common/Footer'
import ProjectViewMain from '../Components/ProjectViewPage/ProjectViewMain'
import Location from '../Components/ProjectViewPage/Location'
import AreaLayout from '../Components/ProjectViewPage/AreaLayout'
import Configration from '../Components/ProjectViewPage/Configration'
import CropDetails from '../Components/ProjectViewPage/CropDetails'
import Ownership from '../Components/ProjectViewPage/Ownership'
import Highlights from '../Components/ProjectViewPage/Highlights'
import Tourist from '../Components/ProjectViewPage/Tourist'
import Gallery from '../Components/ProjectViewPage/Gallery'
import Benefits from '../Components/ProjectViewPage/Benefits'
import NearBy from '../Components/ProjectViewPage/NearBy'
import WhyUs from '../Components/ProjectViewPage/WhyUs'
import AboutDeveloper from '../Components/ProjectViewPage/AboutDeveloper'
import OtherProjects from '../Components/ProjectViewPage/OtherProjects'
import WorkTogether from '../Components/ProjectViewPage/Together'
import Faq from '../Components/ProjectViewPage/Faq'
import Video from '../Components/ProjectViewPage/Video'


const ProjectSandalwood = () => {

    const faagContent = "Set in a naturally thriving environment, this sandalwood farm is carefully nurtured with Arony Farm’s trusted farm management system. Each plot is prepared with enriched soil, scientific planting methods, and reliable water support to ensure healthy and uniform sandalwood growth. The farm is secured, well organized, and monitored by experts for long-term performance. With sustainable cultivation and professional upkeep, it provides a stable, future ready farm asset with excellent appreciation potential.";

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

export default ProjectSandalwood;
