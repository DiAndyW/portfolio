import React, { useState } from 'react';

const ExperienceSection = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const Content = [
        {
            id: 1,
            time: "Mar 2025 - Present",
            title: "Fullstack Developer",
            organization: "Creative Labs | Clubhouse",
            technologies: ['React', 'Next.js', 'Vercel', 'Supabase', 'TailwindCSS'],
            description: "Worked with a 15-person team to build a website using React and Next.js to help UCLA students review and discover clubs",
            points: [
                "Helped create multiple dynamic API routes to Supabase for different queries to ensure efficient database usage",
                "Implemented and optimized partial matching in search results, reducing loading times by 50%",
                "Collaborated with the design team and other developers to bring Hi-Fi designs to life using TailwindCSS"
            ]

        },
        {
            id: 2,
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
            id: 3,
            time: "Jan 2025 - Present",
            title: "Undergraduate Researcher",
            organization: "UCLA Department of Mathematics Lab",
            technologies: [],
            description: "Collaborated with fellow researchers to conduct research on the Bandits Problems in a cascading multiplayer setting with information asymmetry",
            points: [
                "Numerically analyzed several other UCB algorithms for their effectiveness in the aforementioned problem settings to develop a more optimal approach ",
                "Designed an algorithm involving an interval approach to create a list of the top K items, reaching sublinear regret"
            ]
        },
        {
            id: 4,
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
            id: 5,
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

export default ExperienceSection;