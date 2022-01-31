import React from "react";
// import { projectToShow } from "../data";
import { FaGithub } from "react-icons/fa";
import { useFetchFromFirebase } from "../data";

export default function Projects() {
  // const gitHub_url = "https://api.github.com/users/abecus/repos";
  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(false);
  const { data: toInclude, loading: firebaseLoading } =
    useFetchFromFirebase("projects", ["id", "asc"]);

  // const fetchProjects = async () => {
  //   const response = await fetch(gitHub_url);
  //   let data = await response.json();
  //   data = data.filter((e) => {
  //     for (let obj of toInclude) {
  //       if (obj["name"] === e.name) return true;
  //     }
  //     return false;
  //   });
  //   setProjects(data);
  //   setLoading(firebaseLoading);
  // };

  // useEffect(() => {
  //   // fetchProjects();
  // }, [firebaseLoading]);

  return (
    <div className="projects" id="projects">
      <div className="projects__bio-image">
        <h1 className="text-secondary">My Projects</h1>
      </div>
      <div className="projects__items">
        {firebaseLoading
          ? "Loading..."
          : toInclude.map((repo, index) => {
              const { id, name, html_url, description } = repo;
              return (
                <div key={id} className="projects__items__item">
                  {/* <img src="" alt=""/> */}
                  <h2 className="title">{name.replaceAll("-", " ")}</h2>
                  <p className="description">{description}</p>
                  <div className="projects__btns">
                    <a
                      href={html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="projects__btn"
                    >
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
