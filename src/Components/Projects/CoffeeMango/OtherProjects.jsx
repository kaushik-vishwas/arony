import { Section, SectionCol, Badge, Heading, Description, GreenButton } from "../../utils";
import leafs from "../../../assets/leafs.png";
import otherprjct from "../../../assets/otherprjct.png";


const OtherProjects = ({ otherHeading, otherDescription }) => {

    const projects = [
        {
            title: otherHeading,
            image: otherprjct,
            description1: otherDescription
        },
        {
            title: otherHeading,
            image: otherprjct,
            description1: otherDescription
        },
    ];


    return (
        <Section>
            <SectionCol>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-2">
                        <Badge label="Other Projects" />
                        <Heading>Check Other Projects</Heading>
                    </div>
                    <GreenButton label="See all projects" className="bg-[#4BA625]" />
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg border-2 border-[#4BA625] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="p-6 pb-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <img src={leafs} alt="" />
                                </div>
                                <Heading>{project.title}</Heading>
                            </div>

                            <div className="px-6">
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <Description>
                                    {project.description1}
                                </Description>
                                <Description>
                                    Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.
                                </Description>
                                <GreenButton label="View Project Details" className="bg-[#4BA625]" />
                            </div>
                        </div>
                    ))}
                </div>

            </SectionCol>
        </Section>
    );
};

export default OtherProjects;
