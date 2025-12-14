// import React from 'react';
// import youtube from '../../assets/youtube.png'
// import instagram from '../../assets/instagram.png'
// import facebook from '../../assets/facebook.png'
// import logo from '../../assets/logoFooter.png'

// const Footer = () => {
//   const footerLinks = {
//     home: [{ name: 'Home', href: '/' }],
//     company: [
//       { name: 'About Us', href: '/about' },
//       { name: 'Our Team', href: '#' }
//     ],
//     projects: [
//       { name: 'Sandalwood', href: '/project-sandalwood' },
//       { name: 'Mango', href: '/project-mango' },
//       { name: 'Coffee', href: '/project-coffee' },
//     ],
//     information: [
//       { name: 'Blog', href: '#' },
//       { name: 'FAQ', href: '#' }
//     ]
//   };

//   const socialLinks = [
//     { name: 'Instagram', icon: instagram, href: '#' },
//     { name: 'YouTube', icon: youtube, href: '#' },
//     { name: 'Facebook', icon: facebook, href: '#' }
//   ];

//   return (
//     <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 -mb-1">

//           {/* Logo and Tagline - Takes 2 columns on large screens */}
//           <div className="lg:col-span-2">
//             <div className="mb-6">
//               {/* Logo */}
//               <div className="mb-4">
//                 <img
//                   src={logo}
//                   alt="Arony Farms Logo"
//                   className="w-48 sm:w-48 md:w-56 lg:w-72 h-auto object-contain"
//                 />
//               </div>
//               {/* <p className="text-orange-500 font-medium text-sm">You Own We Farm</p> */}
//             </div>

//             {/* Tagline */}
//             <h3 className="text-black font-bold text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] leading-tight mb-4 sm:mb-3 md:mb-2 whitespace-normal sm:whitespace-normal lg:whitespace-nowrap">
//               You own<br />
//               We Farm and Manage <br />
//               You Enjoy the Returns and Green Legacy
//             </h3>

//             {/* Social Links */}
//             <div className="flex items-center gap-3 pt-4 sm:pt-6 md:pt-8 lg:pt-10 sm:gap-3 md:gap-2">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   className="flex items-center gap-2 hover:opacity-80 transition-opacity"
//                 >
//                   <img
//                     src={social.icon}
//                     alt={social.name}
//                     className="w-12 h-12 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain"
//                   />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Sections - Stacked on mobile, grid on larger screens */}
//           <div className="col-span-1 md:col-span-2 lg:col-span-4">
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-0">

//               {/* Home Links */}
//               <div className="ml-0 lg:ml-44">
//                 <h4 className="text-[#002C11] font-bold text-[18px] sm:text-[19px] lg:text-[20px] mb-2 sm:mb-3 lg:mb-2">Home</h4>
//                 <ul className="space-y-1.5 sm:space-y-2">
//                   {footerLinks.home.map((link) => (
//                     <li key={link.name}>
//                       <a
//                         href={link.href}
//                         className="text-[#585858] hover:text-green-600 text-[14px] lg:text-[16px] font-medium sm:text-sm transition-colors"
//                       >
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Company Links */}
//               <div className='ml-0 lg:ml-24'>
//                 <h4 className="text-[#002C11] font-bold text-[18px] sm:text-[19px] lg:text-[20px] mb-2 sm:mb-3 lg:mb-2">Company</h4>
//                 <ul className="space-y-1.5 sm:space-y-2">
//                   {footerLinks.company.map((link) => (
//                     <li key={link.name}>
//                       <a
//                         href={link.href}
//                         className="text-[#585858] hover:text-green-600 text-[14px] lg:text-[16px] font-medium sm:text-sm transition-colors"
//                       >
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Projects Links */}
//               <div className='ml-0 lg:ml-16'>
//                 <h4 className="text-[#002C11] font-bold text-[18px] sm:text-[19px] lg:text-[20px] mb-2 sm:mb-3 lg:mb-2">Projects</h4>
//                 <ul className="space-y-1.5 sm:space-y-2">
//                   {footerLinks.projects.map((link) => (
//                     <li key={link.name}>
//                       <a
//                         href={link.href}
//                         className="text-[#585858] hover:text-green-600 text-[14px] sm:text-sm lg:text-[16px] font-medium transition-colors"
//                       >
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Information Links */}
//               <div className='ml-0 lg:ml-6'>
//                 <h4 className="text-[#002C11] font-bold text-[18px] sm:text-[19px] lg:text-[20px] mb-2 sm:mb-3 lg:mb-2">Information</h4>
//                 <ul className="space-y-1.5 sm:space-y-2">
//                   {footerLinks.information.map((link) => (
//                     <li key={link.name}>
//                       <a
//                         href={link.href}
//                         className="text-[#585858] hover:text-green-600 text-[14px] sm:text-[15px] lg:text-[16px] font-medium transition-colors"
//                       >
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="pt-6 border-t border-gray-400 flex flex-col  sm:flex-row justify-between items-center gap-4">
//           <p className="text-[#585858] text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-center sm:text-left">
//             © Arony Farms. All rights reserved.
//           </p>
//           {/* <p className="text-[#585858] text-[13px] sm:text-[14px] text-center sm:text-right">
//             Designed by <span className="text-[#035925] font-normal">KBs.</span>
//           </p> */}
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer




import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import logo from '../../assets/logoFooter.png';

const Footer = () => {
  const footerRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  //  Observe when footer enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setShowButton(entry.isIntersecting);
      },
      {
        threshold: 0.2, // visible when 20% of footer is in view
      }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = {
    home: [{ name: 'Home', href: '/' }],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '#' },
    ],
    projects: [
      { name: 'Sandalwood', href: '/project-sandalwood' },
      { name: 'Mango', href: '/project-mango' },
      { name: 'Coffee', href: '/project-coffee' },
    ],
    information: [
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: instagram, href: '#' },
    { name: 'YouTube', icon: youtube, href: '#' },
    { name: 'Facebook', icon: facebook, href: '#' },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 -mb-1">
          {/* Logo and Tagline */}
          <div className="lg:col-span-2">
            <div className="mb-3 lg:mb-2">
              <div className="mb-2 lg:mb-1">
                <img
                  src={logo}
                  alt="Arony Farms Logo"
                  className="w-48 sm:w-48 md:w-56 lg:w-64 h-auto object-contain"
                />
              </div>
            </div>

            <h3 className="text-black font-bold text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-snug mb-3 lg:mb-1 whitespace-normal sm:whitespace-normal lg:whitespace-nowrap">
              You own<br />
              We Farm and Manage <br />
              You Enjoy the Returns and Green Legacy
            </h3>

            <div className="flex items-center gap-3 pt-4 sm:pt-4 md:pt-4 lg:pt-6 sm:gap-3 md:gap-3 lg:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-2 hover:opacity-80 transition-transform transform hover:scale-105"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-12 h-12 sm:w-36 sm:h-32 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>


          {/* Navigation Sections */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-0">
              <div className="ml-0 lg:ml-44">
                <h4 className="text-[#002C11] font-bold text-[18px] sm:text-[19px] lg:text-[20px] mb-2">Home</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks.home.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[#585858] hover:text-green-600 text-[14px] lg:text-[16px] font-medium transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ml-0 lg:ml-24">
                <h4 className="text-[#002C11] font-bold text-[18px] sm:text-[19px] lg:text-[20px] mb-2">Company</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[#585858] hover:text-green-600 text-[14px] lg:text-[16px] font-medium transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ml-0 lg:ml-16">
                <h4 className="text-[#002C11] font-bold text-[18px] sm:text-[19px] lg:text-[20px] mb-2">Projects</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks.projects.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[#585858] hover:text-green-600 text-[14px] lg:text-[16px] font-medium transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ml-0 lg:ml-6">
                <h4 className="text-[#002C11] font-bold text-[18px] sm:text-[19px] lg:text-[20px] mb-2">Information</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks.information.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[#585858] hover:text-green-600 text-[14px] lg:text-[16px] font-medium transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t border-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#585858] text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-center sm:text-left">
            © Arony Farms. All rights reserved.
          </p>
        </div>
      </div>

      {/* 👇 Scroll to Top Button (only visible when footer is on screen) */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#4BA625] hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
