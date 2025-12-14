import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import leaf from '../../assets/leaf.png'
import relatedPost1 from '../../assets/relatedPost1.png'
import relatedPost2 from '../../assets/relatedPost2.png'
import relatedPost3 from '../../assets/relatedPost3.png'


const RelatedPosts = () => {
  const posts = [
    {
      id: 1,
      category: "Sustainable Farming",
      title: "Building agricultural supply chains",
      description: "Explore how smart logistics and farm-to-market tools boost global market reach and reduce losses.",
      image: relatedPost1,
      span: "col-span-1"
    },
    {
      id: 2,
      category: "Technology & Innovation",
      title: "Sustainable irrigation techniques",
      description: "Discover cost-effective and eco-friendly irrigation systems that waste while improving crop output.",
      image: relatedPost2,
      span: "col-span-1"
    },
    {
      id: 3,
      category: "Climate & Environment",
      title: "The future-proof climate farming",
      description: "Explore how climate-smart strategies are helping farmers thrive even as weather patterns shift.",
      image: relatedPost3,
      span: "col-span-1 lg:col-span-2"
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <h2 className="text-[70px] sm:text-5xl lg:text-[70px] font-medium text-black">
            Related posts
          </h2>
          <Link
            to="/blog"
            className="flex items-center gap-2 bg-[#035925] text-white px-6 py-3 rounded-full transition-colors group"
          >
            <img src={leaf} alt="" />
            <span className="text-[16px] font-medium">Discover our blog</span>
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {posts.map((post) => (
            <div
              key={post.id}
              className={`${post.span} group cursor-pointer`}
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">

                {/* Image Section */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}

                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[16px] sm:text-sm px-4 py-2 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-[20px] sm:text-2xl font-semibold text-black group-hover:text-green-700 transition-colors flex-1">
                      {post.title}
                    </h3>

                    <button className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-300 hover:border-green-600 hover:bg-green-50 flex items-center justify-center transition-all group/btn">
                      <Plus size={20} className="text-gray-600 group-hover/btn:text-green-600 group-hover/btn:rotate-90 transition-all" />
                    </button>
                  </div>

                  <p className="text-[#585858] text-[16px] sm:text-base leading-relaxed">
                    {post.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default RelatedPosts;