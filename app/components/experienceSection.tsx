import ExpTimeline from "./experienceTimeline";


export function ExperienceSection() {
    return (
        <div className="flex items-center">
            <div className="mt-8 font-normal">
                <h1 className="text-5xl p-4">
                    Experience
                </h1>
                <h2 className="p-4">
                    <div>
                        <ExpTimeline>
                        
                        </ExpTimeline>
                    </div>
                </h2>
            </div>
        </div>
    );
}