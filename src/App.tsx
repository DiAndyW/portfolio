import { useState, useEffect } from 'react';
import { AboutSection } from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import MiscSection from "./components/MiscSection";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
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
    <div className="scroll-smooth">
      <Header />
      
      <div className="flex justify-center pt-4 relative">
        <div 
          className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
          style={{
            height: '150px', 
            background: `linear-gradient(180deg, 
              rgb(17, 24, 39) 0%, 
              rgb(17, 24, 39) 65%, 
              rgba(17, 24, 39, 0.8) 70%, 
              rgba(17, 24, 39, 0.4) 85%, 
              rgba(17, 24, 39, 0) 100%)`
          }}
        />
        
        <div className="flex w-7/10 items-start">
          <aside className="px-4 py-4 w-1/7 flex-shrink-0 sticky top-24 z-50 min-w-0">
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className={`hover:text-[#5d97b3] transition-all duration-200
                      ${activeSection === item.id 
                        ? 'font-bold text-[#5d97b3]' 
                        : ''}
                      text-sm sm:text-base md:text-lg lg:text-xl
                    `}
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
              <MiscSection />
            </section>
          </main>
          
          <div className="w-1/6 flex-shrink-0 p-4">
            {/* <img src='../assets/cat.jpg' alt="cat" className="w-full h-auto"/> */}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;