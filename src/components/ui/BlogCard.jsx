import React from "react"

const BlogCard = ({ title, description, eventTime, author, readingTime, image, icon, href }) => {
  return (
    <a href={href} className="block max-w-md">
      <div className="p-6 shadow-lg bg-white rounded-lg flex flex-col ">
        {/* Image Container (Relative for Positioning) */}
        <div className="relative w-full">
          {image && (
            <img src={image} alt={title}
              className="w-full object-cover rounded-lg" />
          )}

          {/* Floating Icon (Positioned Absolute) */}
          {icon && (
            <img src={icon} alt="icon"
              className="absolute top-0 right-0 w-10 h-10 bg-white p-2 rounded-full shadow-md z-10
          hover:border border-[#FF5634] hover:bg-[#FF5634]" />
          )}
        </div>

        {/* Title */}
        <h2 className="text-xl text-[#FF5634] font-semibold mt-4">{title}</h2>

        {/* Description */}
        <p className="text-bold ">{description}</p>

        {/* Event Time */}
        <p className="text-gray-600">{eventTime}</p>

        {/* Author */}
        <p className="text-gray-600">Author: {author}</p>

        {/* Read Time */}
        <p className="text-gray-600">{readingTime} read</p>

      </div>
    </a>
  );
};

export default BlogCard;
