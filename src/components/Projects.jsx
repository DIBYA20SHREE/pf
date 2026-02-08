import "./Projects.css";
import { useState } from "react";

const projects = [
  {
    title: "GHoR – Group Home Rental App",
    date: "2025",
    category: "Development",
    description:
      "A two-way rental platform for tenants and landlords with verified listings, real-time updates, wishlist support, and filter-based search. Built using modern Android architecture.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase"],
    link: "#",
  },
  {
    title: "Career Compass",
    date: "2025",
    category: "Development",
    description:
      "LLM-powered career assessment platform that extracts goals from user text/audio and maps them to Indian academic streams like UPSC, NEET, and JEE.",
    tech: ["Kotlin", "OpenAI API", "Firebase", "Python"],
    link: "#",
  },
  {
    title: "MilkStore – Smart Milk Delivery App",
    date: "2025",
    category: "Development",
    description:
      "Mobile solution for dairy vendors and customers with order placement, delivery scheduling, and customer management features.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Figma"],
    link: "#",
  },
  {
    title: "TaskyLarm",
    date: "2025",
    category: "Development",
    description:
      "Task-based alarm and reminder application featuring dynamic lists, modal sheets, and modern Material UI components.",
    tech: ["Kotlin", "Jetpack Compose", "Coroutines", "MVVM"],
    link: "#",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Development");

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <section className="projects-section" id="project">
      <span className="projects-badge">My Projects</span>
      <h2 className="projects-title">Check out my work</h2>
      <p className="projects-subtitle">
        Here goes some of my projects
      </p>

      {/* Tabs */}
      <div className="projects-tabs">
        <button
          className={activeTab === "Core CS" ? "active" : ""}
          onClick={() => setActiveTab("Core CS")}
        >
          Core CS
        </button>
        <button
          className={activeTab === "Development" ? "active" : ""}
          onClick={() => setActiveTab("Development")}
        >
          Development
        </button>
      </div>

      {/* Cards */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <span className="project-date">{project.date}</span>

            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a className="project-link" href={project.link}>
              Source
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
