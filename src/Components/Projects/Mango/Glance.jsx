import { Section, Heading, Description, Badge } from "../../utils";
import Video from "../../AboutUs/Video";


const Glance = () => {

    return (
        <Section>
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
                <div className="flex flex-col lg:w-[40%] gap-2 sm:gap-4 md:gap-6">
                    <Badge label="Farm at a Glance" />
                    <Heading>Farm at a glance</Heading>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur. Nunc massa pharetra in lectus augue quis. Magna a
                        proin cursus bibendum tellus leo. Pharetra tellus a tortor neque. Morbi ut blandit
                        ultricies dui. Scelerisque tempus habitant semper arcu euismod sed fringilla feugiat.
                        Porttitor feugiat faucibus cras nibh.
                    </Description>
                </div>

                <div className="w-full lg:w-[60%] items-center justify-center">
                    <Video />
                </div>
            </div>
        </Section>
    );
};

export default Glance;