import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, Link, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function Header() {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center sticky top-0 z-50 bg-gray-900", children: /* @__PURE__ */ jsx("header", { className: "w-7/10 mt-6 mb-2", children: /* @__PURE__ */ jsx("div", { className: "px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-6", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "text-3xl font-medium text-white hover:text-blue-300 transition-colors", children: "Andy Wang" }) }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-6 flex items-center justify-end gap-3", children: [
      /* @__PURE__ */ jsx("a", { href: "https://github.com/DiAndyW", className: "p-2 hover:bg-white/10 rounded-lg transition-colors", children: /* @__PURE__ */ jsx("img", { src: "../../assets/github-white.svg", className: "w-8", alt: "GitHub" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/di-xuan-wang/", className: "p-2 hover:bg-white/10 rounded-lg transition-colors", children: /* @__PURE__ */ jsx("img", { src: "../../assets/InBug-White.png", className: "w-9", alt: "LinkedIn" }) }),
      /* @__PURE__ */ jsx("a", { href: "mailto:andy.dxwang@gmail.com", className: "p-2 hover:bg-white/10 rounded-lg transition-colors", children: /* @__PURE__ */ jsx("img", { src: "../../assets/mail-svgrepo-com.svg", alt: "Email", className: "w-9" }) })
    ] })
  ] }) }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center m-20", children: [
    "You've reached the bottom. Thanks for visiting! Check out my",
    /* @__PURE__ */ jsx("a", { href: "/../../assets/Andy_Wang_Resume.pdf", target: "_blank", className: "mx-1 text-[#AABBCC]", children: " resume " }),
    "if you'd like"
  ] });
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function meta({}) {
  return [{
    title: "Andy Wang"
  }, {
    name: "Andy Wang Portfolio Website",
    content: "This is Andy Wang's Porfolio Website!"
  }];
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "/favicon.svg",
        type: "image/svg"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      className: "scroll-smooth",
      children: [/* @__PURE__ */ jsx(Header, {}), children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {}), /* @__PURE__ */ jsx(Footer, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function AboutSection() {
  return /* @__PURE__ */ jsx("div", { className: "flex self-center items-center", children: /* @__PURE__ */ jsxs("div", { className: "mt-8 font-normal", children: [
    /* @__PURE__ */ jsx("img", { src: "../../assets/pic.jpg", alt: "cat", className: "w-1/3 h-auto ml-4 border-2 border-[#41677a] rounded-full" }),
    /* @__PURE__ */ jsx("h1", { className: "text-5xl p-4", children: "Hi! I'm Andy Wang" }),
    /* @__PURE__ */ jsx("p", { className: "text-l p-4 pb-2", children: "I am an aspiring software developer who is passionate about using their skills to improve the lives of others while also exploring and pushing my own limits. Currently, I am interested in doing fullstack development, AI, and ML in areas like the environment, biomedical fields, or any project which I believe can make a difference." }),
    /* @__PURE__ */ jsxs("p", { className: "text-l p-4 pt-2", children: [
      "I'm currently a third year undergrad at UCLA. Throughout my time here, I've worked on several projects, with my most recent being",
      /* @__PURE__ */ jsx("a", { href: "https://www.clubhouseucla.com/", className: "underline ml-1 text-[#AABBCC]", children: "ClubHouse" }),
      ", which helps UCLA students discover new clubs and rate clubs they're in!"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-l p-4 pt-2", children: "When I'm not working, you can catch me grinding at the gym, enjoying video games, playing my piano, chefing up in the kitchen, getting shots up at basketball court, or scrolling through cat videos." }),
    /* @__PURE__ */ jsx("p", { className: "text-l p-4 pt-2", children: "Feel free to reach out, I hope you have a great day! :D" })
  ] }) });
}
const ExperienceSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const Content = [
    {
      id: 1,
      time: "June 2025 - Present",
      title: "Frontend Developer",
      organization: "UCLA Department of Civil Engineering",
      technologies: ["React Native", "Leaflet.js", "Google Maps API", "Firebase", "Expo"],
      description: "Worked with a small team to develop a weather-tracking platform, allowing farmers to better monitor weather on their land and conserve water",
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
      technologies: ["React", "Next.js", "Vercel", "Supabase", "TailwindCSS"],
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
      technologies: ["React Native", "Java", "Spring Boot", "MongoDB", "TailwindCSS"],
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
      technologies: ["Python", "ROS 2", "Arduino"],
      description: "Assisted a 10-person team in developing autonomous surgery robots, focusing on robotic arm communication",
      points: [
        "Streamlined communication between robotic arms utilizing ROS 2, Arduino, and Python, which led to a 100% increase in transmission speed"
      ]
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "mt-8 font-normal", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl p-4", children: "Experience" }),
    /* @__PURE__ */ jsx("h2", { className: "p-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-4 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-300 via-85% to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "relative ml-8 pb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-[-20px] w-3 h-3 bg-gray-400 rounded-full border-2 border-white z-10" }),
        /* @__PURE__ */ jsx("div", { className: "text-white text-sm ", children: "The journey continues..." })
      ] }),
      Content.map((item) => /* @__PURE__ */ jsxs("div", { className: "relative mb-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-6 w-3 h-3 bg-blue-500 rounded-full border-2 border-white z-10" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-6 gap-4 ml-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "col-span-2 self-start pt-4", children: item.time }),
          /* @__PURE__ */ jsxs(
            "h2",
            {
              className: "col-span-4 col-end-7 border border-2 rounded-lg p-4 shadow-sm hover:shadow-md hover:bg-black/30 transition-all duration-300 cursor-pointer",
              onClick: () => setSelectedItem(selectedItem === item.id ? null : item.id),
              children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2 text-xl", children: item.title }),
                /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2 text-[#5d97b3]", children: item.organization }),
                /* @__PURE__ */ jsx("h3", { className: "mb-4 text-md", children: item.description }),
                /* @__PURE__ */ jsx("h3", { className: "flex flex-wrap gap-2", children: item.technologies.map((technology) => /* @__PURE__ */ jsx("div", { className: "border border-2 rounded-full text-sm px-3 py-1", children: technology }, technology)) }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `overflow-hidden transition-all duration-300 ease-in-out ${selectedItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
                    children: /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "border my-4" }),
                      item.points.map((point, index) => /* @__PURE__ */ jsxs("div", { className: "text-sm flex mb-1", children: [
                        /* @__PURE__ */ jsx("span", { className: "pr-2", children: "•" }),
                        point
                      ] }, index)),
                      item.link && /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: item.link,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "ml-4 text-sm text-[#399fd4] hover:text-[#2d769c] transition-colors duration-200",
                          onClick: (e) => e.stopPropagation(),
                          children: "View Project"
                        }
                      )
                    ] })
                  }
                )
              ]
            }
          )
        ] })
      ] }, item.id))
    ] }) }) })
  ] }) });
};
const ProjectSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const Content = [
    {
      id: 1,
      title: "Morii",
      technologies: ["Swift", "Express.js", "Node.js", "MongoDB"],
      description: "Collaborated on a social media app designed to promote emotional awareness and authentic self-expression",
      link: "https://apps.apple.com/us/app/morii-moments-that-stay/id6746750544",
      points: [
        "Implemented core frontend features using Swift, including a sign-in flow, custom nav bar, homepage, and user profiles",
        "Wrote and tested RESTful API endpoints that returned mood summaries and analytics over customizable time frames"
      ]
    },
    {
      id: 2,
      // time: "Apr 2025",
      title: "True Talent",
      organization: "LAHacks 2025",
      technologies: ["React", "Node.js", "Python", "Flask"],
      description: "Created a code-interview website that helps detect cheating using AI, allowing companies to find the truly talented",
      link: "https://devpost.com/software/realcoder",
      points: [
        "Made a responsive website using React and Node.js allowing interviews to be conducted directly on the website",
        "Prompt engineered Google Gemini models to analyze video, audio, and code for suspicious behavior, providing helpful feedback and follow up questions for interviewers"
      ]
    },
    {
      id: 3,
      // time: "Jan 2024 - Jun 2024",
      title: "Temple of Doom",
      organization: "",
      technologies: ["C++"],
      description: "Designed and developed a 2D dungeon-style game inspired by classic arcade games",
      points: [
        "Optimized recursive algorithms for smart enemy movement, improving processing times by 70%",
        "Implemented real-time map rendering and random map generation, enhancing gameplay responsiveness"
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto p-6 ", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl font-normal mb-8", children: "Projects" }),
    /* @__PURE__ */ jsx("div", { className: "flex-row gap-6", children: Content.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-transparent border border-2 rounded-lg my-8 p-4 shadow-sm hover:shadow-md hover:bg-black/30 transition-all duration-300 cursor-pointer",
        onClick: () => setSelectedItem(selectedItem === item.id ? null : item.id),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-between items-start mb-2", children: /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl text-white", children: item.title }) }),
            item.organization && /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#5d97b3] mb-3", children: item.organization })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white mb-4 leading-relaxed", children: item.description }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: item.technologies.map((technology, index) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-white border border-2 rounded-full text-sm px-3 py-1",
              children: technology
            },
            index
          )) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `overflow-hidden transition-all duration-300 ease-in-out ${selectedItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
              children: /* @__PURE__ */ jsxs("div", { className: "border-t pt-4 mt-4", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-4", children: item.points.map((point, index) => /* @__PURE__ */ jsxs("div", { className: "text-sm text-white flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-white pr-2", children: "•" }),
                  /* @__PURE__ */ jsx("span", { children: point })
                ] }, index)) }),
                item.link && /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: item.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center text-sm text-[#399fd4] hover:text-blue-800 font-medium transition-colors duration-200",
                    onClick: (e) => e.stopPropagation(),
                    children: "View Project →"
                  }
                )
              ] })
            }
          )
        ]
      },
      item.id
    )) })
  ] });
};
const MiscSection = () => {
  const Content = [
    {
      id: 1,
      type: "text",
      title: "The number of cats I've had",
      frontImage: "5",
      frontText: "",
      backContent: {
        title: "",
        facts: [
          "Aurora (Orange)",
          "Sunny (Orange) + Luna (Calico) (Siblings)",
          "Emma (Orange) (I looked after her for a friend)",
          "Cinder (Gray) (Short for Cinderella)"
        ]
      }
    },
    {
      id: 2,
      type: "image",
      frontImage: "../../assets/rain.jpg",
      isLocalImage: true,
      backContent: {
        title: "Post Rain at UCLA",
        facts: [
          "I love rain",
          "Thanks for reading"
        ]
      }
    },
    {
      id: 3,
      type: "text",
      title: "What's been on repeat",
      frontImage: "🎵",
      frontText: "",
      backContent: {
        title: "Can't get 'em out of my head!",
        facts: [
          "Laufey - Silver Lining",
          "keshi - WANTCHU",
          "d4vd - Sleep Well",
          "HUNTR/X - Golden"
        ]
      }
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "mt-8 font-normal", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl p-4 text-white", children: "Misc" }),
    /* @__PURE__ */ jsx("h2", { className: "p-4 text-white mb-8", children: "Here are some random snippets or facts from my life!" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-6 justify-center", children: Content.map((item) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "group",
        style: { perspective: "1000px" },
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative w-64 h-80 transition-transform duration-800",
            style: {
              transformStyle: "preserve-3d"
            },
            onMouseEnter: (e) => {
              e.currentTarget.style.transform = "rotateY(180deg)";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.transform = "rotateY(0deg)";
            },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 w-full h-full rounded-lg border border-white/30 border-2 bg-gray-900/90 backdrop-blur-sm p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-200",
                  style: {
                    backfaceVisibility: "hidden"
                  },
                  children: item.type === "text" ? (
                    // Text card front
                    /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx("div", { className: "text-6xl mb-4", children: item.frontImage }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white text-center mb-2", children: item.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-white/80 text-center", children: item.frontText })
                    ] })
                  ) : (
                    // Image card front - fills entire card
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: item.isLocalImage ? /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: item.frontImage,
                        alt: "Card image",
                        className: "w-full h-full object-cover rounded-lg"
                      }
                    ) : /* @__PURE__ */ jsx("div", { className: "text-[12rem] leading-none", children: item.frontImage }) })
                  )
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "absolute inset-0 w-full h-full rounded-lg border border-white/20 border-2 backdrop-blur-sm p-6 flex flex-col justify-center",
                  style: {
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  },
                  children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white text-center mb-6", children: item.backContent.title }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: item.backContent.facts.map((fact, index) => /* @__PURE__ */ jsxs("div", { className: "text-white flex items-start", children: [
                      /* @__PURE__ */ jsx("span", { className: "mr-2", children: "•" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: fact })
                    ] }, index)) })
                  ]
                }
              )
            ]
          }
        )
      },
      item.id
    )) })
  ] }) });
};
const Home = () => {
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry2) => {
        if (entry2.isIntersecting) {
          setActiveSection(entry2.target.id);
        }
      });
    }, {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    });
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  const navItems = [{
    id: "about",
    label: "About"
  }, {
    id: "experience",
    label: "Experience"
  }, {
    id: "projects",
    label: "Projects"
  }, {
    id: "misc",
    label: "Misc"
  }];
  return /* @__PURE__ */ jsxs("div", {
    className: "flex justify-center pt-4 relative",
    children: [/* @__PURE__ */ jsx("div", {
      className: "fixed top-0 left-0 right-0 z-40 pointer-events-none",
      style: {
        height: "150px",
        background: `linear-gradient(180deg, 
            rgb(17, 24, 39) 0%, 
            rgb(17, 24, 39) 65%, 
            rgba(17, 24, 39, 0.8) 70%, 
            rgba(17, 24, 39, 0.4) 85%, 
            rgba(17, 24, 39, 0) 100%)`
      }
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex w-7/10 items-start",
      children: [/* @__PURE__ */ jsx("aside", {
        className: "px-4 py-4 w-1/7 flex-shrink-0 sticky top-24 z-50 min-w-0",
        children: /* @__PURE__ */ jsx("ul", {
          className: "space-y-2",
          children: navItems.map((item) => /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: `#${item.id}`,
              className: `hover:text-[#5d97b3] transition-all duration-200
                    ${activeSection === item.id ? "font-bold text-[#5d97b3]" : ""}
                    text-sm sm:text-base md:text-lg lg:text-xl
                  `,
              children: item.label
            })
          }, item.id))
        })
      }), /* @__PURE__ */ jsxs("main", {
        className: "flex-1 px-4",
        children: [/* @__PURE__ */ jsx("section", {
          id: "about",
          children: /* @__PURE__ */ jsx(AboutSection, {})
        }), /* @__PURE__ */ jsx("section", {
          id: "experience",
          children: /* @__PURE__ */ jsx(ExperienceSection, {})
        }), /* @__PURE__ */ jsx("section", {
          id: "projects",
          children: /* @__PURE__ */ jsx(ProjectSection, {})
        }), /* @__PURE__ */ jsx("section", {
          id: "misc",
          children: /* @__PURE__ */ jsx(MiscSection, {})
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "w-1/6 flex-shrink-0 p-4"
      })]
    })]
  });
};
const home = UNSAFE_withComponentProps(Home);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-B4QzlZyZ.js", "imports": ["/assets/chunk-QMGIS6GS-DwwANxhG.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-DJJxa1jh.js", "imports": ["/assets/chunk-QMGIS6GS-DwwANxhG.js"], "css": ["/assets/root-CYFRTpVY.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-BhAypn6h.js", "imports": ["/assets/chunk-QMGIS6GS-DwwANxhG.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-f7f2b6e7.js", "version": "f7f2b6e7", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
