import React, { useState } from 'react';

const ExpTimeline = () => {
    const Content = [
        {
            index: 0,
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
            index: 1,
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
        <div>
            {Content.map((item, index) => (<div className="grid grid-cols-6 my-4">
                <h2 className="col-span-2 self-center">
                    {item.time}
                </h2>
                <h2 className="col-span-4 col-end-7 border p-4">
                    <h3 className="font-bold mb-2 text-xl">
                        {item.title}
                    </h3>
                    <h3 className="font-bold mb-2">
                        {item.organization}
                    </h3>
                    <h3>
                        {item.description.map(item => (
                            <p className="text-sm">
                                - {item}
                            </p>
                        ))}
                    </h3>
                    <h3 className="flex">
                        {item.technologies.map(technology => (
                            <div className="border rounded-full p-2 m-1">
                                {technology}
                            </div>
                        ))}
                    </h3>
                </h2>
            </div>
            ))}
        </div>
    );
}

export default ExpTimeline;