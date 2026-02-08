import { useEffect } from "react";
import "./App.css";
import BackgroundVideo from "./BackgroundVideo";
import heroVideo from "./assets/videos/hero-video.mp4";
import About from "./components/About";
import Education from "./components/Education";
import LowerNavbar from "./LowerNavbar";
import Experience from "./components/Experience";
import Projects from './components/Projects';
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";


function App() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <>
      {/* BACKGROUND VIDEO */}
      <BackgroundVideo />

      <nav className="navbar">
        <ul className="navbar-box">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <LowerNavbar />


      {/* CONTENT */}
      <section className="hero reveal">
        <div className="hero-content">
          <h1 className="typing-text">Hi, I'm Dibyashree .......   </h1>
          <p>Android Developer • Kotlin Native</p>
          <a
            href="/Dibyashree_Chakravarty_Resume.pdf"
            download
            className="resume-btn"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "8px" }}
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>


        </div>
        {/* RIGHT SIDE */}
        <div className="hero-video">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contacts/>

      
      

      <footer className="footer">
        © 2026 Dibyashree Chakravarty
      </footer>
    </>
  );
}

export default App;
