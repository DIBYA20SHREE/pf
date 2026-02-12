import "./LowerNavbar.css";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope
} from "react-icons/fa6";
import { SiLeetcode, SiHashnode } from "react-icons/si";

const LowerNavbar = () => {
  return (
    <footer className="lower-navbar">
      <a
        href="https://github.com/DIBYA20SHREE"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://leetcode.com/u/Dibyashree30/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode"
      >
        <SiLeetcode />
      </a>

      <a
        href="https://hashnode.com/@DibyaC"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hashnode"
      >
        <SiHashnode />
      </a>

      <a
        href="https://x.com/Dibyashree30"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
      >
        <FaXTwitter />
      </a>

      <a
        href="https://www.linkedin.com/in/dibyashreechakravarty30/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:dibyashreechakravarty@gmail.com"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>
    </footer>
  );
};

export default LowerNavbar;
