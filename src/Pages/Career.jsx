import Navbar from '../Components/AboutUs/Navbar';
import Join from '../Components/Career/Join';
import Testing from '../Components/Career/Testing';
import Work from '../Components/Career/Work';
import Openings from '../Components/Career/Openings';
import Apply from '../Components/Career/Apply';
import Footer from '../Components/Common/Footer';


const Career = () => {

    return (
        <div>
            <Navbar />
            <Join />
            {/* <Testing /> */}
            <Work />
            {/* <Openings /> */}
            <Apply />
            <Footer />
        </div>
    );
};

export default Career;