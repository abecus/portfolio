import React from "react";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";

export default function footer() {
  return (
    <>
      <div className="social-icons">
        <a
          target="_blank"
          rel="noreferrer"
          className="link footer-link"
          href="https://github.com/abecus"
        >
          <FaGithub size={30} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="link footer-link"
          href="https://www.linkedin.com/in/abdulsalamone/"
        >
          <FaLinkedinIn size={30} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="link footer-link"
          href="https://medium.com/@sleepingFish"
        >
          <FaMediumM size={30} />
        </a>
      </div>
      <footer>&copy; Copyright {new Date().getFullYear()}</footer>
    </>
  );
}
