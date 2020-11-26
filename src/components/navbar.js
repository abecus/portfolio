import React from "react";
// import { FaFileDownload } from "react-icons/fa";

function Navbar() {
  const resumeUrl =
    "https://drive.google.com/file/d/1hfYUFAmMR0ULHEKGkQNfmyJSwvO7kJsw/view?usp=sharing";
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a
              className="link"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Resume
            </a>
          </li>
          <li>
            <a className="link" href="#blog">
              Blog
            </a>
          </li>
          <li>
            <a className="link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
