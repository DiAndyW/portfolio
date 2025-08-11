import React, { useState } from 'react';

const ExperienceSection = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const Content = [
        {
            id: 1,
            time: "June 2025 - Present",
            title: "Frontend Developer",
            organization: "UCLA Department of Civil Engineering",
            technologies: ['React Native', 'Leaflet.js', 'Google Maps API', 'Firebase', 'Expo'],
            description: "Worked with a small team to develop a weather-tracking platform, allowing farmers to monitor weather on their land",
            points: [
                "Created a responsive, cross-platform interface using React Native, supporting web, iOS, and Android",
                "Used Leaflet.js for web maps, and React Native Maps and Google Maps API on mobile to display weather layers from Google Earth Engine",
                "Cached weather data in Firebase for high-traffic areas, improving processing speeds by 60%"
            ]
        },
        {
            id: 2,
            time: "Mar 2025 - Present",
            title: "Fullstack Developer",
            organization: "Creative Labs | Clubhouse",
            technologies: ['React', 'Next.js', 'Vercel', 'Supabase', 'TailwindCSS'],
            description: "Worked with a 15-person team to build a website using React and Next.js to help UCLA students review and discover clubs",
            link: "https://www.clubhouseucla.com/",
            points: [
                "Helped create multiple dynamic API routes to Supabase for different queries to ensure efficient database usage",
                "Implemented and optimized partial matching in search results, reducing loading times by 50%",
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
            description: "Collaborated with others to research the multi-armed bandit problem in reinforcement learning, submission under review at AAAI",
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
                "Facilitated seamless communication between the backend and frontend by designing and testing a RESTful API, ensuring proper integration and data exchange for the mobile app",
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
                <h1 className="text-5xl p-4">
                    Experience
                </h1>
                <h2 className="p-4">
                    <div className="max-w-4xl mx-auto p-6">
                        <div className="relative">
                            {/* Extended timeline line with gradient fade */}
                            <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-300 via-85% to-transparent"></div>

                            {/* Timeline end marker */}
                            <div className="relative ml-8 pb-8">
                                <div className="absolute left-[-20px] w-3 h-3 bg-gray-400 rounded-full border-2 border-white z-10"></div>
                                <div className="text-white text-sm ">The journey continues...</div>
                            </div>

                            {Content.map((item) => (
                                <div key={item.id} className="relative mb-10">
                                    {/* Timeline dot */}
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
                                            <h3 className="font-bold mb-2 text-[#5d97b3]">
                                                {item.organization}
                                            </h3>
                                            <h3 className="mb-4 text-md">
                                                {item.description}
                                            </h3>

                                            {/* Technologies */}
                                            <h3 className="flex flex-wrap gap-2">
                                                {item.technologies.map(technology => (
                                                    <div key={technology} className="border rounded-full text-sm px-3 py-1">
                                                        {technology}
                                                    </div>
                                                ))}
                                            </h3>
                                            
                                            {/* Extended description if card clicked */}
                                            {selectedItem == item.id && (
                                                <div>
                                                    <h3 className="border my-4"></h3>
                                                    {item.points.map((point, index) => (
                                                        <div key={index} className="text-sm flex mb-1">
                                                            <span className="pr-2">•</span>
                                                            {point}
                                                        </div>
                                                    ))}
                                                    
                                                    {item.link && (
                                                        <a 
                                                        href={item.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="ml-4 text-sm text-[#399fd4] hover:text-[#2d769c] transition-colors duration-200"
                                                        onClick={(e) => e.stopPropagation()}
                                                        >
                                                        View Project
                                                        </a>
                                                    )}
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

export default ExperienceSection;