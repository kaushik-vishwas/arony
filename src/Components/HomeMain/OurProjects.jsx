import { useNavigate } from 'react-router-dom';
import { Heading, Description, Section, SectionCol, Badge, GreenButton } from "../utils";
import projectOne from "../../assets/NewChanges/projectOne.png";
import projectTwo from "../../assets/NewChanges/projectTwo.jpg";
import projectThree from "../../assets/NewChanges/projectThree.png";

const OurProjects = () => {
    const navigate = useNavigate();

    const projects = [
        {
            title: "Arony Sandalwood Farm",
            image: projectOne,
            desc: "Arony Sandalwood Farm offers investors access to one of the most valuable and sought-after timber species, cultivated through sustainable agroforestry practices for long-term wealth creation.",
            route: "/project-sandalwood" // Add your sandalwood project route here
        },
        {
            title: "The Hampi Highlands",
            image: projectTwo,
            desc: "Arony Mango Farm provides a unique opportunity to benefit from premium mango cultivation, combining high-yield varieties with natural ecosystem-driven farming techniques.",
            route: "/project-mango" // This will redirect to project-mango page
        },
        {
            title: "The Maland Mist",
            image: projectThree,
            desc: "Arony Coffee Farm provides a unique opportunity to benefit from premium coffee cultivation, combining shade-grown plantations with sustainable, ecosystem-driven agroforestry practices.",
            route: "/project-coffee-malnad-mist" // This will redirect to project-coffee-malnad-mist page
        },
    ];

    const handleProjectClick = (route) => {
        navigate(route);
    };

    return (
        <Section>
            <SectionCol>
                <div className="flex flex-col lg:flex-row w-full items-start justify-between gap-6">
                    <div className="flex flex-col gap-4">
                        <Badge label="Our Projects" />
                        <Heading className="text-left">
                            Explore our Projects
                        </Heading>
                    </div>

                    <Description className="text-left max-w-lg">
                        Our projects are thoughtfully developed to offer long-term value, natural beauty,
                        and a lifestyle rooted in sustainability. Each farmland project blends ecological
                        richness with modern convenience, giving you the opportunity to own land that grows
                        in both purpose and prosperity.
                    </Description>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                    {projects.map((project, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden shadow-lg flex flex-col justify-between min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[500px] hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute inset-0 fade-blur-mask"></div>

                            <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
                                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                <div className="flex flex-col items-start justify-center gap-2 sm:gap-4 md:gap-6">
                                    <p className="text-sm sm:text-base leading-relaxed opacity-90">{project.desc}</p>
                                    <GreenButton 
                                        label="View Project Details" 
                                        className="bg-[#4BA625] hover:bg-[#3a8a1d] transition-colors duration-300"
                                        onClick={() => handleProjectClick(project.route)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionCol>
        </Section>
    );
};

export default OurProjects;