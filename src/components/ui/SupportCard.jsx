import React from "react"

const SupportCard = ({ title, description, icon, link }) => {
  return (
    <a href={link} className="block">
        <div className=" p-6 rounded-lg  w-full max-w-sm bg-[#FFFFFF] hover:bg-[#FFEDDD] overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
                        ">
            <div className="relative z-10">
                {/*Optional Icon */}
                {icon && (
                    <img
                    src={icon}
                    alt="Icon"
                    className="w-12 h-12 mb-4"
                    />
                )}

                {/* Card Content */}
                <div className="relative">
                    <h2 className="text-2xl font-semibold text-black hover:text-[#FF5634]">{title}</h2>
                    <p className="mt-2">{description}</p>
                </div>
                
                {/* Arrow Link Inside Content */}
                <span className="text-black text-2xl mt-4 block text-right">→</span>
            </div>
        </div>
    </a>
  );
};

export default SupportCard;
