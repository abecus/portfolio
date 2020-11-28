import React, { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const resumeUrl =
    "https://drive.google.com/file/d/1hfYUFAmMR0ULHEKGkQNfmyJSwvO7kJsw/view?usp=sharing";
  return (
    <div className="header">
      <div className="menu-btn" onClick={() => setShowMenu((prev) => !prev)}>
        <span className={`menu-btn__burger${showMenu ? " open" : ""}`}></span>
      </div>

      <nav className={`nav${showMenu ? " open" : ""}`}>
        <ul className={`menu-nav${showMenu ? " open" : ""}`}>
          <li className={`menu-nav__item${showMenu ? " open" : ""}`}>
            <a className="menu-nav__link" href="#home">
              Home
            </a>
          </li>

          <li className={`menu-nav__item${showMenu ? " open" : ""}`}>
            <a
              className="menu-nav__link"
              href="#about"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              About
            </a>
          </li>

          <li className={`menu-nav__item${showMenu ? " open" : ""}`}>
            <a
              className="menu-nav__link"
              href="#projects"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              Projects
            </a>
          </li>

          <li className={`menu-nav__item${showMenu ? " open" : ""}`}>
            <a
              className="menu-nav__link"
              href="#blog"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              Blog
            </a>
          </li>

          <li className={`menu-nav__item${showMenu ? " open" : ""}`}>
            <a
              className="menu-nav__link"
              href="#contact"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              Contact
            </a>
          </li>

          <li className={`menu-nav__item${showMenu ? " open" : ""}`}>
            <a
              className="menu-nav__link"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowMenu((prev) => !prev)}
              download
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
