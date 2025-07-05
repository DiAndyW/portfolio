import { AboutSection } from "~/components/aboutSection";
import { ExperienceSection } from "~/components/experienceSection";
import { ProjectSection } from "~/components/projectSection";

export default function Home() {
  return (
    <div className="scroll-smooth flex">
      <aside className="w-1/5 sticky top-0 p-4">
        <ul className="space-y-2">
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#experience" className="hover:text-black">Experience</a></li>
          <li><a href="#projects" className="hover:text-black">Projects</a></li>
        </ul>
      </aside>
      <main>
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
    </div>


  );
}
