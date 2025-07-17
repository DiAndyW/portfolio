import React, { useState } from 'react';

const ProjectSection = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const Content = [
        {
            id: 1,
            time: "Apr 2025",
            title: "True Talent",
            organization: "LAHacks 2025",
            technologies: ['React', 'Node.js', 'Python', 'Flask'],
            description: "Created a code-interview website that helps detect cheating using AI, allowing companies to find the truly talented",
            points: [
                "Made a responsive website using React and Node.js allowing interviews to be conducted directly on the website",
                "Prompt engineered Google Gemini models to analyze video, audio, and code for suspicious behavior, providing helpful feedback and follow up questions for interviewers"
            ]
        },
        {
            id: 2,
            time: "Jan 2024 - Jun 2024",
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
        <div className="flex items-center">
            <div className="mt-8 font-normal">
                <h1 className="text-5xl p-4">
                    Experience
                </h1>
                <h2 className="p-4">
                    <div className="max-w-4xl mx-auto p-6">
                        <div className="relative">
                            <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-gray-300"></div>

                            {Content.map((item) => (
                                <div key={item.id} className="relative mb-10">
                                    {/* Line */}
                                    <div className="absolute left-3 top-6 w-3 h-3 bg-blue-500 rounded-full border-2 border-white z-10"></div>

                                    <div className="grid grid-cols-6 gap-4 ml-8">
                                        <h2 className="col-span-2 self-start pt-4">
                                            {item.time}
                                        </h2>

                                        {/* Description Card */}
                                        <h2 className="col-span-4 col-end-7 border rounded-lg p-4 cursor-pointer" onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}>
                                            <h3 className="font-bold mb-2 text-xl">
                                                {item.title}
                                            </h3>
                                            <h3 className="font-bold mb-2">
                                                {item.organization}
                                            </h3>
                                            <h3 className="mb-4 text-md">
                                                {item.description}
                                            </h3>

                                            {/* Technologies */}
                                            <h3 className="flex flex-wrap gap-2">
                                                {item.technologies.map(technology => (
                                                    <div className="border rounded-full text-sm px-3 py-1">
                                                        {technology}
                                                    </div>
                                                ))}
                                            </h3>
                                            
                                            {/* Extended description if card clicked */}
                                            {selectedItem == item.id && (
                                                <div>
                                                    <h3 className="border my-4"></h3>
                                                    {item.points.map(item => (
                                                        <div className="text-sm flex">
                                                            <span className="pr-2">•</span>
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </h2>
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

export default ProjectSection;