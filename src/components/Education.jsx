import "./Education.css";
import tezpurLogo from "../assets/images/tulogo.png";
import jecLogo from "../assets/images/jeclogo.png";

const Education = () => {
  return (
    <section className="section">
      <h2 className="section-title" id="education">Education</h2>

      {/* M.Tech */}
      <div className="edu-item">
        <div className="edu-left">
          <img
            src={tezpurLogo}
            alt="Tezpur University"
            className="edu-logo"
          />

          <div>
            <h3>Tezpur University</h3>
            <p className="edu-sub">
              M.Tech in Computer Science & Engineering
            </p>
            <p className="edu-meta">
              Focus: Computer Networks, Network Security, Research
            </p>
          </div>
        </div>

        <div className="edu-right">2024 – Present</div>
      </div>

      {/* B.Tech */}
      <div className="edu-item">
        <div className="edu-left">
          <img
            src={jecLogo}
            alt="Jorhat Engineering College"
            className="edu-logo"
          />

          <div>
            <h3>Jorhat Engineering College</h3>
            <p className="edu-sub">
              B.Tech in Computer Science & Engineering
            </p>
            <p className="edu-meta">CGPA: 8.28</p>
          </div>
        </div>

        <div className="edu-right">2020 – 2024</div>
      </div>
    </section>
  );
};

export default Education;

