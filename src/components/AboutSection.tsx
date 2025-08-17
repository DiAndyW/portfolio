export function AboutSection() {
    return (
        <div className="flex self-center items-center">
            <div className="mt-8 font-normal">
                <img src="/portfolio/assets/pic.jpg" alt="cat" className="w-1/3 h-auto ml-4 border-2 border-[#41677a] rounded-full"></img>
                <h1 className="text-5xl p-4">
                Hi! I'm Andy Wang
                </h1>
                <p className="text-l p-4 pb-2">
                I am an aspiring software developer who is passionate about using their skills to improve the lives of others while also exploring and pushing my own limits. 
                Currently, I am interested in doing fullstack development, AI, and ML in areas like the environment, biomedical fields, 
                or any project which I believe can make a difference.   
                </p>
                <p className="text-l p-4 pt-2">
                I'm currently a third year undergrad at UCLA. Throughout my time here, I've worked on several projects, with my most recent being 
                <a href="https://www.clubhouseucla.com/" className="underline ml-1 text-[#AABBCC]">ClubHouse</a>
                , which helps UCLA
                students discover new clubs and rate clubs they're in! 
                </p>
                <p className="text-l p-4 pt-2">
                When I'm not working, you can catch me grinding at the gym, enjoying video games, playing my piano, chefing up in the kitchen, 
                getting shots up at basketball court, or scrolling through cat videos.
                </p>
                <p className="text-l p-4 pt-2">
                Feel free to reach out, I hope you have a great day! :D 
                </p>
            </div>
        </div>
    );
    
}