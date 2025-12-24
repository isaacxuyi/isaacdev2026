import React from 'react';

const Education = () => {
  const educationList = [
    {
      institution: 'University of Rome "La Sapienza"',
      degree: "Master's Degree in Design cum laude",
      location: "Rome, IT",
      year: "2017",
    },
    {
      institution: "University of Salerno",
      degree: "Bachelor's Degree in Audiovisual Communication",
      location: "Salerno, IT",
      year: "2014",
    }
  ];

  return (
    <div className="bg-white text-gray-900 w-full py-16 px-6 md:px-12 lg:px-20">
      {/* Layout Container:
        - Mobile: flex-col (Stack content)
        - Desktop (lg): flex-row (Side-by-side)
      */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 max-w-7xl mx-auto">
        
        {/* Left Section: Title */}
        <div className="lg:w-1/3 shrink-0">
          <h2 className="text-4xl font-normal tracking-tight text-black">
            Education
          </h2>
        </div>

        {/* Right Section: Education List */}
        <div className="lg:w-2/3 flex flex-col gap-16">
          {educationList.map((edu, index) => (
            <div key={index} className="group">
              
              {/* Top Row: Institution + Meta Data */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-2xl font-medium text-black group-hover:text-gray-700 transition-colors max-w-md leading-tight">
                  {edu.institution}
                </h3>
                
                {/* Meta data (Location & Year) */}
                <div className="text-gray-500 text-sm font-normal mt-2 sm:mt-0 flex gap-8 shrink-0">
                  <span>{edu.location}</span>
                  <span>{edu.year}</span>
                </div>
              </div>

              {/* Bottom Row: Degree Details */}
              <p className="text-gray-600 text-lg font-normal mt-2 leading-relaxed max-w-lg">
                {edu.degree}
              </p>
              
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Education;