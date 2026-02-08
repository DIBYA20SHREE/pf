import "./Experience.css";
import amtronLogo from "../assets/images/Amtron.png";

const Experience = () => {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Work Experience</h2>

      <div className="exp-item">
        <div className="exp-left">
          {/* LOGO */}
          <img
            src={amtronLogo}
            alt="AMTRON"
            className="exp-logo"
          />

          {/* TEXT */}
          <div className="exp-text">
            <h3>AMTRON</h3>
            <p className="exp-role">Android Intern</p>
            <p className="exp-location">Jorhat, Assam, India</p>

            <div className="tech-stack">
              <span>Android</span>
              <span>Kotlin</span>
              <span>Firebase</span>
              <span>MVVM</span>
            </div>
          </div>
        </div>

        <div className="exp-right">Jun 2023 – Jul 2023</div>
      </div>
    </section>
  );
};

export default Experience;
