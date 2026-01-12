import { useState } from "react";
import { Section, SectionCol, Heading, Badge } from '../../utils';
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import CloseIcon from "@mui/icons-material/Close";
import galOne from "../../../assets/NewChanges/galOne.jpg";
import galTwo from "../../../assets/NewChanges/galTwo.jpg";
import galThree from "../../../assets/NewChanges/galThree.jpg";
import galFour from "../../../assets/NewChanges/galFour.jpg";


const Gallery = () => {

    const [openImage, setOpenImage] = useState(null);

    const images = [
        galOne, galTwo, galThree, galFour,
        galOne, galTwo, galThree, galFour,
        galOne, galTwo, galThree, galFour,
    ];

    return (
        <div>
            <Section>
                <SectionCol>
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <Badge label="Gallery" />
                        <Heading>Project Gallery</Heading>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {images.map((img, index) => (
                            <div key={index} className="relative group cursor-pointer">
                                <img src={img} alt="" className="w-full aspect-[4/3] object-cover rounded-xl" />
                                <button
                                    onClick={() => setOpenImage(img)}
                                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
                                >
                                    <ZoomOutMapIcon className="text-black text-[20px] sm:text-[22px] lg:text-[24px]" />
                                </button>
                            </div>
                        ))}
                    </div>

                </SectionCol>
            </Section>

            {openImage && (
                <div
                    className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center z-[999] p-4"
                    onClick={() => setOpenImage(null)}
                >
                    <button
                        onClick={() => setOpenImage(null)}
                        className="self-end mb-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all"
                    >
                        <CloseIcon className="text-black text-[22px] sm:text-[24px] lg:text-[26px]" />
                    </button>

                    <div
                        className="w-full max-w-[90%] max-h-[85%] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={openImage}
                            alt=""
                            className="w-full h-full object-contain rounded-xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;