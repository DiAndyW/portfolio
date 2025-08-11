import { AboutSection } from "~/components/aboutSection";
import { useState, useEffect } from 'react';
import ExperienceSection from "~/components/experienceSection";
import  ProjectSection from "~/components/projectSection";

const Home = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'misc', label: 'Misc' }
  ];

  return (
    <div className="flex justify-center pt-4">
      <div className="flex w-7/10 items-start">
        <aside className="px-4 py-4 w-1/7 flex-shrink-0 sticky top-24">
          <ul className="space-y-2">
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`hover:text-[#5d97b3] text-xl transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'font-bold text-[#5d97b3]' 
                      : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        
        <main className="flex-1 px-4">
          <section id="about">
            <AboutSection />
          </section>
          <section id="experience">
            <ExperienceSection />
          </section>
          <section id="projects">
            <ProjectSection />
          </section>
          <section id="misc">
            <AboutSection />
          </section>
        </main>
        
        <div className="w-1/6 flex-shrink-0 p-4">
          <img src='../../assets/cat.jpg' alt="cat" className="w-full h-auto"/>
        </div>
      </div>
    </div>
  );
}

export default Home;