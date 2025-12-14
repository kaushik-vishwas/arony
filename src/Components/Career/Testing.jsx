import { useState } from "react";
import { Section, SectionCol } from "../utils";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const slides = [
    {
        id: 1,
        title: "Innovative Environment",
        description:
            "Be part of a dynamic and forward-thinking team where your ideas are valued, and innovation is encouraged.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
        id: 2,
        title: "Growth Opportunities",
        description:
            "Access continuous learning, mentorship, and clear growth paths to advance your career.",
        image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
    },
    {
        id: 3,
        title: "Collaborative Culture",
        description:
            "Work with talented people across teams in a supportive and inclusive environment.",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
    {
        id: 4,
        title: "Work-Life Balance",
        description:
            "Enjoy a healthy balance with flexible hours, supportive leadership, and an environment that values your well-being.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
        id: 5,
        title: "Inclusive Workplace",
        description:
            "Be part of a diverse and inclusive team where everyone’s voice matters and collaboration drives success.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    },
    {
        id: 6,
        title: "Impactful Work",
        description:
            "Contribute to meaningful projects that create real value and leave a lasting impact.",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    }
];

const Testing = () => {

    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const next = () => {
        setCurrent((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevIndex = (current - 1 + slides.length) % slides.length;
    const nextIndex = (current + 1) % slides.length;

    const visible = [
        { index: prevIndex, position: "prev" },
        { index: current, position: "active" },
        { index: nextIndex, position: "next" },
    ];

    return (
        <Section className="bg-[#F0F8ED]">
            <SectionCol className="max-w-7xl mx-auto">
                <div className="w-full flex flex-col gap-8 sm:gap-10 lg:gap-12">
                    <div className="relative w-full mt-2">

                        <div className="flex items-stretch gap-3 sm:gap-5 lg:gap-6 overflow-hidden">
                            {visible.map(({ index, position }) => {

                                const slide = slides[index];
                                const isActive = position === "active";

                                const sideVisibility =
                                    "hidden sm:flex sm:basis-[30%] lg:basis-[25%]";
                                const activeSize =
                                    "basis-full sm:basis-[40%] lg:basis-[50%]";

                                const sizeClass = isActive ? activeSize : sideVisibility;
                                const intensity = isActive
                                    ? "opacity-100 scale-100"
                                    : "opacity-60 scale-[0.96]";

                                return (
                                    <div
                                        key={slide.id + position}
                                        className={`relative ${sizeClass} transition-all duration-500 ease-out`}
                                    >
                                        <div
                                            className={`relative h-[260px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden bg-black ${intensity} transition-all duration-500 ease-out`}
                                        >
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                            <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold mb-2">
                                                    {slide.title}
                                                </h3>
                                                <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed">
                                                    {slide.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            type="button"
                            onClick={prev}
                            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 
               w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10
               rounded-full bg-white shadow-md flex items-center justify-center 
               text-[#111827] text-[10px] sm:text-[12px] lg:text-lg"
                        >
                            <ArrowBackIosNewIcon fontSize="small" />
                        </button>

                        <button
                            type="button"
                            onClick={next}
                            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 
               w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10
               rounded-full bg-white shadow-md flex items-center justify-center 
               text-[#111827] text-[10px] sm:text-[12px] lg:text-lg"
                        >
                            <ArrowForwardIosIcon fontSize="small" />
                        </button>

                    </div>
                </div>
            </SectionCol>
        </Section>
    );
};

export default Testing;