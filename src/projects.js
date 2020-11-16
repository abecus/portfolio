import React, { useEffect, useState } from "react";

export default function Projects() {
  const gitHub_url = "https://api.github.com/users/abecus/repos";
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const response = await fetch(gitHub_url);
    const data = await response.json();
    console.log(data);
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  console.log(projects);

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((repo, index) => {
        const { name, url, description } = repo;
        console.log(repo);
        return (
          <article key={index} className="single-project">
            <a href={url} className="link">
              {name}
            </a>
            <p>{description}</p>
          </article>
        );
      })}
    </div>
  );
}
