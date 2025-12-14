
import leafgrn from "../../assets/leaf-grn.png";


const Video = ({ faagContent }) => {

    return (
        <div className="bg-gray-50 py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
                    {/* Left Content Section */}
                    <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                            <img
                                src={leafgrn}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-black text-[15px] sm:text-[16px] font-medium">
                                Farm at a Glance
                            </span>
                        </div>

                        <h1 className="text-[30px] md:text-[34px] font-medium text-black leading-tight">
                            Farm at a glance
                        </h1>

                        <p className="text-[#585858] text-justify text-[15px] md:text-[16px] leading-relaxed">
                            { faagContent }
                        </p>
                    </div>

                    {/* Right Vimeo Video Section */}
                    <div className="relative w-full">
                        <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://player.vimeo.com/video/1135693663?h=cfb4d2a0d4&title=0&byline=0&portrait=0"
                                title="Arony Farm Hampi Highlands"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
