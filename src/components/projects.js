import React, { useEffect, useState } from "react";
import { projectToShow } from "../data";

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
      {projects.map((repo, index) => {
        const { name, html_url, description } = repo;
        return (
          <a href={html_url} key={index} target="_" className="single-project">
            <article className="content">
              <h3 className="title">{name}</h3>
              <p className="description">{description}</p>
            </article>
          </a>
        );
      })}
    </div>
  );
}
