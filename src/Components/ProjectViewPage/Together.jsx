import together1 from '../../assets/approach3.png'
import leaf from "../../assets/leaf.png";
import together2 from '../../assets/apporach4.png'
import together3 from '../../assets/approach1.png'


const Together = () => {
  const features = [
    { icon: leaf, label: "Sustainable" },
    { icon: leaf, label: "Transparent" },
    { icon: leaf, label: "Impactful" }
  ];

  const images = [
    { id: 1, url: together1, alt: "Work together image" },
    { id: 2, url: together2, alt: "Work together image" },
    { id: 3, url: together3, alt: "Work together image" }
  ];

  return (
    <div className=" py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-md  overflow-hidden">

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-20 min-h-[400px] lg:min-h-[450px]">

            {/* Left Section */}
            <div className="p-6 sm:p-10 lg:p-16 flex flex-col justify-center text-center lg:text-left">
              <div className="space-y-6 sm:space-y-8">

                {/* Heading */}
                <div>
                  <h2 className="text-3xl sm:text-5xl lg:text-[70px] font-medium text-black leading-tight mb-4 sm:mb-6">
                    Grow something&nbsp;<br className="hidden sm:block" />
                    great together.
                  </h2>
                  <p className="text-[#585858] text-sm sm:text-base font-normal leading-snug max-w-lg mx-auto lg:mx-0">
                    Whether you're a farmer, distributor, or partner, we're here to support your goals with sustainable solutions and global expertise.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center lg:justify-start">
                  <button className="bg-[#4BA625] hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                    <img src={leaf} alt="leaf icon" className="w-5 h-7 object-contain" />
                    <span>Let's work together</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative flex flex-col h-full">
              {/* Scrollable Image Row */}
             <div className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-hide px-4 sm:px-6 scroll-smooth">
                <div className="flex h-full gap-5 sm:gap-8">
                  {images.map((image) => (
                    <div
                      key={image.id}
                      className="flex-shrink-0 w-[85%] sm:w-72 md:w-80 lg:w-[380px] h-[220px] sm:h-[300px] lg:h-[400px] mx-auto sm:mx-0"
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-md transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Tags */}
              <div className="px-2 sm:px-6 py-10 sm:py-16 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className=" px-4 sm:px-5 py-2 rounded-full inline-flex items-center gap-2"
                  >
                    <img
                      src={feature.icon}
                      alt="leaf icon"
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                    />
                    <span className="text-black font-medium text-xs sm:text-sm">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Together
