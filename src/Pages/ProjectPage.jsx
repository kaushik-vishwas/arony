import Navbar from '../Components/AboutUs/Navbar'
import ProjectPageMain from '../Components/ProjectPage/ProjectPageMain'
import Farms from '../Components/ProjectPage/Farms'
import WorkTogether from '../Components/HomeMain/WorkTogether'
import Footer from '../Components/Common/Footer'
import Gallery from '../Components/ProjectPage/Gallery'


const ProjectPage = () => {

  return (
    <div>
      <Navbar />
      <ProjectPageMain />
      <Farms />
      <Gallery />
      <WorkTogether />
      <Footer />
    </div>
  );
};

export default ProjectPage;


