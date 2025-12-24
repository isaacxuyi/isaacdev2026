import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      company: "HCL Technologies",
      role: "Senior UX/UI Designer",
      location: "Rome, IT",
      period: "2018-Now",
      description: "Designed enterprise automation platforms including Universal Orchestrator and Clara AI Assistant for IBM partnership projects",
    },
    {
      company: "Enel Group",
      role: "Design Lead",
      location: "Rome, IT",
      period: "2022",
      description: "Led digital transformation initiatives for Italy's largest energy company, managing design teams and stakeholder relationships",
    }
  ];

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen p-6 md:p-12 lg:p-20">
      {/* Layout Container 
        - Mobile default: flex-col (Stack title on top of content)
        - Desktop (lg): flex-row (Title on left, content on right)
        
        *Note: If you strictly wanted the reverse as per your prompt, swap them to: 'flex-row lg:flex-col'
      */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 max-w-7xl mx-auto">
        
        {/* Left Section: Title */}
        <div className="lg:w-1/3 shrink-0">
          <h2 className="text-4xl font-light tracking-wide text-gray-100">
            Work Experience
          </h2>
        </div>

        {/* Right Section: Experience List */}
        <div className="lg:w-2/3 flex flex-col gap-16">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              {/* Job Header: Company & Meta Data */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                  {exp.company}
                </h3>
                
                {/* Meta data (Location & Date) */}
                <div className="text-gray-400 text-sm font-medium mt-1 sm:mt-0 flex gap-6">
                  <span>{exp.location}</span>
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role Title */}
              <div className="text-xl text-gray-300 mb-4 font-light">
                {exp.role}
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed max-w-2xl text-base">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default WorkExperience;