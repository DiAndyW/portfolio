import { AboutSection } from "~/components/aboutSection";
import { ExperienceSection } from "~/components/experienceSection";
import { ProjectSection } from "~/components/projectSection";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex w-4/5 items-start">
        <aside className="p-4 w-1/5 flex-shrink-0">
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-[#5d97b3] text-xl">About</a></li>
            <li><a href="#experience" className="hover:text-[#5d97b3] text-xl">Experience</a></li>
            <li><a href="#projects" className="hover:text-[#5d97b3] text-xl">Projects</a></li>
          </ul>
        </aside>
        
        <main className="flex-1 px-8">
          <section id="about">
            <AboutSection />
          </section>
          <section id="experience">
            <ExperienceSection />
          </section>
          <section id="projects">
            <ProjectSection />
          </section>
        </main>
        
        <div className="w-1/5 flex-shrink-0 p-4">
          <img src='../../assets/cat.jpg' alt="cat" className="w-full h-auto"/>
        </div>
      </div>
    </div>
  );
}
