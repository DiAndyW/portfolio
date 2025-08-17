import React, { useState } from 'react';

const ProjectSection = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const Content = [
        {
            id: 1,
            title: "Morii",
            technologies: ['Swift', 'Express.js', 'Node.js', 'MongoDB'],
            description: "Collaborated on a social media app designed to promote emotional awareness and authentic self-expression",
            link: "https://apps.apple.com/us/app/morii-moments-that-stay/id6746750544",
            points: [
                "Implemented core frontend features using Swift, including a sign-in flow, custom nav bar, homepage, and user profiles",
                "Wrote and tested RESTful API endpoints that returned mood summaries and analytics over customizable time frames"
            ]
        },
        {
            id: 2,
            // time: "Apr 2025",
            title: "True Talent",
            organization: "LAHacks 2025",
            technologies: ['React', 'Node.js', 'Python', 'Flask'],
            description: "Created a code-interview website that helps detect cheating using AI, allowing companies to find the truly talented",
            link: "https://devpost.com/software/realcoder",
            points: [
                "Made a responsive website using React and Node.js allowing interviews to be conducted directly on the website",
                "Prompt engineered Google Gemini models to analyze video, audio, and code for suspicious behavior, providing helpful feedback and follow up questions for interviewers"
            ]
        },
        {
            id: 3,
            // time: "Jan 2024 - Jun 2024",
            title: "Temple of Doom",
            organization: "",
            technologies: ['C++'],
            description: "Designed and developed a 2D dungeon-style game inspired by classic arcade games",
            points: [
                "Optimized recursive algorithms for smart enemy movement, improving processing times by 70%",
                "Implemented real-time map rendering and random map generation, enhancing gameplay responsiveness",
            ]
        },
    ]

    return (
        <div className="max-w-6xl mx-auto p-6 ">
            <h1 className="text-5xl font-normal mb-8">
                Projects
            </h1>
            
            <div className="flex-row gap-6">
                {Content.map((item) => (
                    <div 
                        key={item.id} 
                        className="bg-transparent border border-2 rounded-lg my-8 p-4 shadow-sm hover:shadow-md hover:bg-black/30 transition-all duration-300 cursor-pointer"
                        onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                    >
                        {/* Header */}
                        <div className="mb-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-xl text-white">
                                    {item.title}
                                </h3>
                                {/* <span className="text-sm text-white ml-4">
                                    {item.time}
                                </span> */}
                            </div>
                            
                            {item.organization && (
                                <h4 className="font-semibold text-[#5d97b3] mb-3">
                                    {item.organization}
                                </h4>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-white mb-4 leading-relaxed">
                            {item.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {item.technologies.map((technology, index) => (
                                <span 
                                    key={index}
                                    className="text-white border border-2 rounded-full text-sm px-3 py-1"
                                >
                                    {technology}
                                </span>
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
                            <div className="border-t pt-4 mt-4">
                                <div className="space-y-2 mb-4">
                                    {item.points.map((point, index) => (
                                        <div key={index} className="text-sm text-white flex items-start">
                                            <span className="text-white pr-2">•</span>
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>

                                {item.link && (
                                    <a 
                                        href={item.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm text-[#399fd4] hover:text-blue-800 font-medium transition-colors duration-200"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        View Project →
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectSection;