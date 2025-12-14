import React from 'react'
import { Plus } from 'lucide-react'
import blogs1 from '../../assets/blogs1.png'
import blogs2 from '../../assets/blogs2.png'
import blogs3 from '../../assets/relatedPost1.png'
import blogs4 from '../../assets/blogs4.png'
import blogs5 from '../../assets/blogs5.png'
import blogs6 from '../../assets/blogs6.png'

const Blogs = () => {
  const blogs = [
    {
      category: 'Modern & Progressive',
      title: 'Growing Smarter, Farming Better.',
      description:
        'Dive into insights on agri-innovation, sustainability, and modern farmland ownership curated by experts shaping the next generation of farming.',
      image: blogs1,
      categoryColor: 'bg-white/20 backdrop-blur-md text-white',
    },
    {
      category: 'Earthy & Inspirational',
      title: 'Stories from the Soil.',
      description:
        'Explore how nature, technology, and people come together to grow a more sustainable and rewarding future in agriculture.',
      image: blogs2,
      categoryColor: 'bg-white/20 backdrop-blur-md text-white',
    },
    {
      category: 'Green & Fresh',
      title: 'Where Nature Meets Opportunity.',
      description:
        'Discover how sustainable farming, green investments, and innovation are reshaping growth for the planet and for you.',
      image: blogs3,
      categoryColor: 'bg-white/20 backdrop-blur-md text-white',
    },
    {
      category: 'Climate & Environment',
      title: 'The future-proof climate farming.',
      description:
        'Explore how climate-smart strategies are helping farmers thrive even as weather patterns shift.',
      image: blogs4,
      categoryColor: 'bg-white/20 backdrop-blur-md text-white',
    },
    {
      category: 'Climate & Environment',
      title: 'The future-proof climate farming.',
      description:
        'Explore how climate-smart strategies are helping farmers thrive even as weather patterns shift.',
      image: blogs5,
      categoryColor: 'bg-white/20 backdrop-blur-md text-white',
    },
    {
      category: 'Why owning farmland is smarter than ever',
      title: 'Investing in Farmland: A Green Asset for the Future',
      description:
        'Farmland is one of the most stable and appreciating assets. Find out how Arony Farms makes ownership effortless blending natural growth with long-term financial and ecological returns.',
      image: blogs6,
      categoryColor: 'bg-white/20 backdrop-blur-md text-white',
    },
  ]

  return (
    <div className="bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Blog Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Black overlay with 30% opacity */}
                <div className="absolute inset-0 bg-black/30"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`${blog.categoryColor} px-4 py-2 rounded-full text-xs sm:text-sm font-medium`}
                  >
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-semibold text-black leading-snug sm:leading-tight flex-1">
                    {blog.title}
                  </h3>

                  {/* Plus Icon Button */}
                  <button className="flex-shrink-0 w-10 h-10 bg-gray-100 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors group">
                    <Plus className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                  </button>
                </div>

                <p className="text-[#585858] text-sm sm:text-base leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
