import React from "react";
import { FaFileDownload } from "react-icons/fa";

export default function home() {
  const resumeUrl =
    "https://drive.google.com/file/d/1hfYUFAmMR0ULHEKGkQNfmyJSwvO7kJsw/view?usp=sharing";
  return (
    <div>
      <h1>Hello, I am Abdul Salam</h1>
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer" download>
        <button>
          <i className="fas fa-download" />
          Resume
        </button>
      </a>
    </div>
  );
}
