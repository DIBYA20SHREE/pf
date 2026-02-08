import "./About.css";

function About() {
  return (
    <section className="about section reveal" id="about">
      <h2>About Me</h2>

      <div className="about-content">
        <p>
          I’m a Computer Science professional currently pursuing
          <span> M.Tech in Computer Science & Engineering</span>, with a strong
          interest in networking and network security research. Alongside
          academics, I actively work as a freelance Android developer, building
          scalable, real-world applications using <span>Kotlin</span>,{" "}
          <span>Jetpack Compose</span>, <span>Firebase</span>, and modern{" "}
          <span>MVVM architecture</span>.
        </p>

        <p>
          My freelancing journey has helped me work on end-to-end projects—from
          UI/UX design and clean architecture to backend integration and API
          consumption—with a strong focus on performance, usability, and
          maintainability. I enjoy converting problem statements into practical,
          user-centric solutions.
        </p>

        <p>
          On the research side, I’m particularly interested in computer networks,
          elastic optical networks, and the application of <span>AI/LLMs</span> in
          networking and security, and I aim to bridge theoretical concepts with
          applied system design.
        </p>

        <p>
          I’m driven by continuous learning, experimentation, and building
          impactful solutions—whether it’s for a client project or a research
          problem.
        </p>
      </div>
    </section>
  );
}

export default About;
