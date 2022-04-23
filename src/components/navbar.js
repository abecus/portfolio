import React, { useState, useEffect } from "react";
import { navbarLinks } from "../data";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrolled(position > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div className="menu-btn" onClick={() => setShowMenu((prev) => !prev)}>
        <span className={`menu-btn__burger${showMenu ? " open" : ""}`}></span>
      </div>

      <nav
        className={`nav${showMenu ? " open" : ""}${
          scrolled ? " scrolled" : ""
        }`}
      >
        <ul className={`menu-nav${showMenu ? " open" : ""}`}>
          {navbarLinks.map((obj, index) => {
            const { ref, name } = obj;
            return (
              <li
                key={index}
                className={`menu-nav__item${showMenu ? " open" : ""}`}
                onClick={() => setShowMenu((prev) => !prev)}
              >
                {name === "resume" ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menu-nav__link"
                    href={ref}
                  >
                    {name}
                  </a>
                ) : (
                  // <a
                  //   className="menu-nav__link"
                  //   href={ref}
                  //   onClick={() =>
                  //     document
                  //       .getElementById(`${ref.substring(1, ref.length)}`)
                  //       .scrollIntoView({ behavior: "smooth" })
                  //   }
                  // >
                  //   {name}
                  // </a>
                  // "hi"
                  <Link 
                  className="menu-nav__link" 
                  to={"/"+ref}
                  // to="/"
                   >{name}</Link>
                )
                }
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
