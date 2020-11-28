import React, { useEffect, useState } from "react";
import { projectToShow } from "../data";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const gitHub_url = "https://api.github.com/users/abecus/repos";
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const response = await fetch(gitHub_url);
    let data = await response.json();
    data = data.filter((e) => {
      return projectToShow.includes(e.name);
    });
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="projects" id="projects">
      <div className="projects__bio-image">
        <h1 className="text-secondary">My Projects</h1>
      </div>
      <div className="projects__items">
        {projects.map((repo, index) => {
          const { name, html_url, description } = repo;
          return (
            <div key={index} className="projects__items__item">
              {/* <img src="" alt=""/> */}
              <h2 className="title">{name}</h2>
              <p className="description">{description}</p>
              <div className="projects__btns">
                <a href={html_url} target="_" className="projects__btn">
                  <FaGithub className="projects__btn__git" size={30} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
