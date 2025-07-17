import React, { useState } from 'react';

const ExpTimeline = () => {

    const Content = [
        {
            id: 0,
            time: "Mar 2025 - Present",
            title: "Fullstack Developer",
            organization: "Creative Labs",
            technologies: ['React', 'Next.js', 'Vercel', 'Supabase', 'TailwindCSS'],
            description: [
                "Worked with a 15-person team to build a website using React and Next.js to help UCLA students review and discover clubs",
                "Helped create multiple dynamic API routes to Supabase for different queries to ensure efficient database usage",
                "Implemented and optimized partial matching in search results, reducing loading times by 50%",
                "Collaborated with the design team and other developers to bring Hi-Fi designs to life using TailwindCSS"
            ]

        },
        {
            id: 1,
            time: "Jan 2025 - Present",
            title: "Undergraduate Researcher",
            organization: "UCLA Department of Mathematics Lab",
            technologies: [],
            description: [
                "Collaborated with fellow researchers to conduct research on the Bandits Problems in a cascading multiplayer setting with information asymmetry",
                "Numerically analyzed several other UCB algorithms for their effectiveness in the aforementioned problem settings to develop a more optimal approach ",
                "Designed an algorithm involving an interval approach to create a list of the top K items, reaching sublinear regret"
            ]

        }

    ]

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="relative">
                <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-gray-300"></div>

                {Content.map((item, index) => (
                    <div className="relative mb-10">
                        {/* Line */}
                        <div className="absolute left-3 top-6 w-3 h-3 bg-blue-500 rounded-full border-2 border-white z-10"></div>

                        <div className="grid grid-cols-6 gap-4 ml-8">
                            <h2 className="col-span-2 self-start pt-4">
                                {item.time}
                            </h2>

                            {/* Description Card */}
                            <h2 className="col-span-4 col-end-7 border rounded-lg p-4">
                                <h3 className="font-bold mb-2 text-xl">
                                    {item.title}
                                </h3>
                                <h3 className="font-bold mb-2">
                                    {item.organization}
                                </h3>

                                {/* Bullet points */}
                                <h3 className="mb-4">
                                    {item.description.map(item => (
                                        <p className="text-sm">
                                            - {item}
                                        </p>
                                    ))}
                                </h3>
                                <h3 className="flex flex-wrap gap-2">
                                    {item.technologies.map(technology => (
                                        <div className="border rounded-full text-sm px-3 py-1">
                                            {technology}
                                        </div>
                                    ))}
                                </h3>
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExpTimeline;