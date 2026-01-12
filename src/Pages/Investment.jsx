import Navbar from '../Components/AboutUs/Navbar';
import Footer from '../Components/Common/Footer.jsx';
import HeroPlant from "../Components/Investment/HeroPlant";
import PlantStats from "../Components/Investment/PlantStats"
import SandlewoodEcosystem from "../Components/Investment/SandlewoodEcosystem"
import NurseryAdvantage from "../Components/Investment/NurseryAdvantage"
import CropsWeSpecialize from "../Components/Investment/CropsWeSpecialize"
import WhyChooseNursery  from "../Components/Investment/WhyChooseNursery"


export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroPlant />
      <PlantStats/>
      <SandlewoodEcosystem/>
      <NurseryAdvantage />
      <CropsWeSpecialize />
      <WhyChooseNursery />
      <Footer />

    </>
  );
}
