import React from 'react'
import { useNavigate } from 'react-router-dom'

const SupportProgramCard = ({ title, description, imageUrl, altText, link}) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(link)}
      className="flex justify-between items-center pb-4 border-b hover:bg-[#FFEDDD] hover:rounded-lg transition-all duration-300">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <img src={imageUrl} alt={altText} className="w-6 h-6 text-[#FF5634]" />
    </div>
  );
};

export default SupportProgramCard;