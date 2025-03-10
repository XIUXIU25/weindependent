import React from 'react'
import { useNavigate } from 'react-router-dom';

const EventCard = ({
  imageUrl,
  date,
  day,
  time,
  title,
  description,
  link,
  status = "Upcoming", // Default status is "Upcoming"
}) => {
  const statusColor = status === "Upcoming" ? "text-[#FF5634]" : "text-[#6C6C6C]";
  const navigate = useNavigate();

  return (
    <div className="col-span-4 md:col-span-6 lg:col-span-12 rounded-lg overflow-hidden bg-white shadow-sm gap-6">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between p-4 w-[calc(100%-2rem)] pointer-events-none">
          <span className="flex items-center px-3 py-1 rounded-full text-sm pointer-events-auto">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            {status}
          </span>
          <button className="bg-white rounded-full shadow-sm pointer-events-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-500"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-6">
        <p className={`${statusColor} text-sm mb-2`}>
          {date} | {day} | {time} EST
        </p>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <div className="flex justify-end">
          <button
            className=" w-48 h-16 bg-[#FFEDDD] text-[#FF5634] px-8 py-8 rounded-full transition-colors hover:bg-[#FF5634] hover:text-[#FFFFFF] "
            onClick={() => navigate(link)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;