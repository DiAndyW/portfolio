import React, { useState } from 'react';

const ExperienceSection = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const Content = [
        {
            id: 1,
            time: "June 2025 - Present",
            title: "Frontend Developer",
            organization: "UCLA Department of Civil Engineering",
            technologies: ['React Native', 'Leaflet.js', 'Google Maps API', 'FastAPI', 'Firebase', 'Supabase'],
            description: "Developed a weather-tracking platform enabling farmers to optimize irrigation, processing millions of geospatial records for efficient mapping and retrieval",
            points: [
                "Created a responsive, cross-platform interface using React Native, supporting web, iOS, and Android",
                "Used Leaflet.js for web maps, and React Native Maps and Google Maps API on mobile to display weather data; managed user data with Firebase",
                "Made a FastAPI backend storing geospatial data in Supabase with local caching, improving speeds by 60%"
            ]
        },
        {
            id: 2,
            time: "Mar 2025 - Present",
            title: "Fullstack Developer",
            organization: "Creative Labs | Clubhouse",
            technologies: ['React', 'Next.js', 'Vercel', 'Supabase', 'TailwindCSS'],
            description: "Built a website using React and Next.js to help UCLA students review and discover clubs, serving 150+ users since launch",
            link: "https://www.clubhouseucla.com/",
            points: [
                "Created multiple dynamic API routes to Supabase for different queries to ensure efficient database usage",
                "Implemented and optimized partial matching in searching, reducing loading times by 50%",
                "Collaborated with the design team and other developers to bring Hi-Fi designs to life using TailwindCSS"
            ]
        },
        {
            id: 3,
            time: "Mar 2025 - Jun 2025",
            title: "Learning Assistant",
            organization: "UCLA Department of Computer Science",
            technologies: [],
            description: "Led discussions for 30+ students in a Data Structures & Algorithms course",
            points: [
                "Implemented various pedagogy techniques to improve student understanding",
                "Discussed teaching objectives and key focuses weekly with course instructor, teaching assistants, and other learning assistants",
                "Attended seminars to learn and improve facilitation strategies and collaborative learning methods"
            ]
        },
        {
            id: 4,
            time: "Jan 2025 - Present",
            title: "Undergraduate Researcher",
            organization: "UCLA Department of Mathematics Lab",
            technologies: [],
            description: "Collaborated with others to research the multi-armed bandit problem in reinforcement learning",
            points: [
                "Numerically analyzed several other UCB algorithms for their effectiveness in this setting",
                "Designed two algorithms with an intervals approach in one and a round-robin style in the other, reaching sublinear regret in both"
            ]
        },
        {
            id: 5,
            time: "Oct 2024 - May 2025",
            title: "Fullstack Developer",
            organization: "Creative Labs | Algoace",
            technologies: ['React Native', 'Java', 'Spring Boot', 'MongoDB', 'TailwindCSS'],
            description: "Collaborated with a small team to build an app to help Software Engineers enhance coding and interview skills",
            points: [
                "Engineered the backend infrastructure using Spring Boot and MongoDB to manage and process user data efficiently, improving processes by 60%",
                "Wrote, tested, and optimized RESTful API endpoints using Postman, ensuring proper integration and improving loading speed by 50%",
                "Implemented Hi-Fi designs and made UI/UX improvements on the frontend using TailwindCSS"
            ]

        },
        {
            id: 6,
            time: "Sep 2024 - Jan 2025",
            title: "Undergraduate Researcher",
            organization: "Elegant Mind Lab UCLA",
            technologies: ['Python', 'ROS 2', 'Arduino'],
            description: "Assisted a 10-person team in developing autonomous surgery robots, focusing on robotic arm communication",
            points: [
                "Streamlined communication between robotic arms utilizing ROS 2, Arduino, and Python, which led to a 100% increase in transmission speed"
            ]

        },

    ]

    return (
        <div className="flex items-center">
        <div className="mt-8 font-normal">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl p-2 sm:p-4">
                Experience
            </h1>
            <h2 className="p-2 sm:p-4">
                <div className="max-w-4xl mx-auto p-3 sm:p-6">
                    {/* Mobile Layout */}
                    <div className="block sm:hidden space-y-3">
                        {Content.map((item) => (
                            <div key={item.id} className="border border-2 border-white/30 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                                    className="w-full p-3 text-left bg-[#2d4a57]/20 hover:bg-[#7bb3d1]/20 transition-colors duration-300 cursor-pointer"
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex-1">
                                            <h3 className="font-bold text-base text-white mb-1">{item.title}</h3>
                                            <p className="text-[#5d97b3] text-sm font-medium">{item.organization}</p>
                                        </div>
                                        <div className="text-right ml-3">
                                            <span className="text-xs text-gray-300 block mb-1">{item.time}</span>
                                            <div className="text-gray-400 text-lg font-light">
                                                {selectedItem === item.id ? '−' : '+'}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-300 text-sm mb-1 mt-2 leading-relaxed">{item.description}</p>
                                </button>
                                
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        selectedItem === item.id 
                                            ? 'max-h-96 opacity-100' 
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="p-3 bg-[#2d4a57]/10 border-t border-white/20">
                                        {/* Extended description points */}
                                        <div className="space-y-1 mb-3">
                                            {item.points.map((point, index) => (
                                                <div key={index} className="text-xs flex leading-relaxed">
                                                    <span className="pr-2 flex-shrink-0 text-[#7bb3d1]">•</span>
                                                    <span className="text-gray-300">{point}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-1">
                                            {item.technologies.map(technology => (
                                                <div key={technology} className="border border-2 border-white/30 rounded-full text-xs px-2 py-1">
                                                    {technology}
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {item.link && (
                                            <a 
                                                href={item.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-block text-xs text-[#5d97b3] hover:text-[#7bb3d1] transition-colors duration-200 underline"
                                            >
                                                View Project
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden sm:block relative">
                        {/* Extended timeline line */}
                        <div className="absolute top-0 left-2 sm:left-4 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-300 via-85% to-transparent"></div>

                        {/* Timeline end marker */}
                        <div className="relative ml-4 sm:ml-8 pb-8">
                            <div className="absolute left-[-12px] sm:left-[-20px] w-3 h-3 bg-gray-400 rounded-full border-2 border-white z-10"></div>
                            <div className="text-white text-sm ml-1">The journey continues...</div>
                        </div>

                        {Content.map((item) => (
                            <div key={item.id} className="relative mb-6 sm:mb-10">
                                {/* Timeline dot */}
                                <div className="absolute left-[5px] sm:left-3 top-5 sm:top-6 w-3 h-3 bg-[#7bb3d1] rounded-full border-2 border-white z-10"></div>

                                <div className="ml-4 sm:ml-8">
                                    <div className="block sm:grid sm:grid-cols-6 sm:gap-4">
                                        <div className="sm:col-span-2 sm:self-start pt-3 sm:pt-4 mb-2 sm:mb-0 ml-1">
                                            <span className="text-sm sm:text-base text-gray-300 font-medium">
                                                {item.time}
                                            </span>
                                        </div>

                                        {/* Description Card */}
                                        <div className="sm:col-span-4 sm:col-end-7 border border-2 border-white/30 rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md bg-[#2d4a57]/20 hover:bg-[#7bb3d1]/20 hover:border-[#7bb3d1] transition-all duration-300 cursor-pointer" 
                                            onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                                        >
                                            <h3 className="font-bold mb-2 text-lg sm:text-xl">
                                                {item.title}
                                            </h3>
                                            <h3 className="font-bold mb-2 text-sm sm:text-base text-[#5d97b3]">
                                                {item.organization}
                                            </h3>
                                            <h3 className="mb-3 sm:mb-4 text-sm sm:text-md leading-relaxed">
                                                {item.description}
                                            </h3>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                                {item.technologies.map(technology => (
                                                    <div key={technology} className="border border-2 border-white/30 rounded-full text-xs sm:text-sm px-2 sm:px-3 py-1">
                                                        {technology}
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            {/* Extended description */}
                                            <div 
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                    selectedItem === item.id 
                                                        ? 'max-h-96 opacity-100' 
                                                        : 'max-h-0 opacity-0'
                                                }`}
                                            >
                                                <div>
                                                    <div className="border-t my-3 sm:my-4"></div>
                                                    {item.points.map((point, index) => (
                                                        <div key={index} className="text-xs sm:text-sm flex mb-1 leading-relaxed">
                                                            <span className="pr-2 flex-shrink-0 text-[#7bb3d1]">•</span>
                                                            <span>{point}</span>
                                                        </div>
                                                    ))}
                                                    
                                                    {item.link && (
                                                        <a 
                                                            href={item.link} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="inline-block mt-2 sm:ml-4 text-xs sm:text-sm text-[#5d97b3] hover:text-[#7bb3d1] transition-colors duration-200 underline"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            View Project
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </h2>
        </div>
    </div>
);
}

export default ExperienceSection;