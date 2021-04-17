import React from "react";
import { useFetchFromFirebase } from "../data";

export default function About() {
  const { data: jobs, loading } = useFetchFromFirebase("jobs", ["id", "asc"]);

  return (
    <section className="about" id="about">
      <div className="about__boi-image">
        <div className="about__bio">
          <h1 className="text-secondary">WHOAMI</h1>
          <p>I'm Abdul Salam.</p>
          <p>
            I graduated from Delhi Technological University, India with a degree
            in Engineering Physics with major in Electronics and minor in
            Robotics.
          </p>
          <p>
            I'm always in for learning new stuff. I enjoy Solving complex
            problems and have sound background knowledge of different fields
            such as Robotics, Mathematics, and Physics.
          </p>
          <p>
            I have maintained and developed multiple projects from scratch,
            carrying the development of its' back-end and front-end codebase.
          </p>
          <p>
            If you are trying to solve something complex, let's work together to
            solve that. Also, don’t hesitate if you want to ask me anything or
            if you just want to contact me.
          </p>
        </div>
      </div>

      <div className="jobs">
        {loading
          ? "Loading..."
          : jobs.map((job, index) => {
              return (
                <div className="jobs__job" key={index}>
                  <h2 className="text-secondary">{job.title}</h2>
                  <h3>{job.date}</h3>
                  <h4>{job.company}</h4>
                  <p>{job.desc}</p>
                </div>
              );
            })}
      </div>
    </section>
  );
}
