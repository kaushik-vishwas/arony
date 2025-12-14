import Navbar from '../Components/AboutUs/Navbar'
import BlogMain from '../Components/BlogView/BlogViewMain'
import BlogViewMain1 from '../Components/BlogView/BlogViewMain1'
import RelatedPosts from '../Components/BlogView/RelatedPosts'
import Footer from '../Components/Common/Footer'


const BlogView = () => {

  return (
    <div>
      <Navbar />
      <BlogMain />
      <BlogViewMain1 />
      <RelatedPosts />
      <Footer />
    </div>
  );
};

export default BlogView;
