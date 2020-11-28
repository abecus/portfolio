import React from "react";

export default function about() {
  // A full-stack software engineer with over 14 years of experience.
  // I have maintained, developed and launched multiple projects from scratch, carrying the development of its' back-end and front-end codebases.
  // My current toolset includes Elixir Language & Phoenix Framework, Ruby & Ruby on Rails, React, Redux, Angular, TypeScript, Docker and all the
  // other various frameworks, libraries and technologies related to them.
  // I can help you with all the sides of your project:

  // verifying good UI/UX design,
  // leading/co-developing the back-end and front-end,
  // setting up the CI/CD,
  // mentoring the team,
  // estimating tasks,
  // researching possible techs,
  // leading, launching and monitoring the project.
  // Call me a Swiss Army Knife in terms of software.
  return (
    <section className="about" id="about">
      <div className="about__boi-image">
        <div className="about__bio">
          <h1 className="text-secondary">BIO</h1>
          <p>I'm a Software Developer.</p>
          <p>
            I have maintained and developed multiple projects from scratch,
            carrying the development of its' back-end and front-end codebases.
          </p>
          <p>
            I enjoy Solving complex problems and have sound background knowledge
            of different fields such as Robotics, Advanced Mathematics, and
            Physics.
          </p>
          <p>
            If you are trying to solve something complex, let's work together to
            solve that.
          </p>
        </div>
      </div>

      <div className="jobs">
        <div className="jobs__job">
          <h2 className="text-secondary">Machine Learning Intern</h2>
          <h3>Summer - 2019</h3>
          <h4>Career Launcher</h4>
          <p>
            Designed and implemented Algorithmic Trading models using
            Machine-Learning, also Developed statistical methods to learn and
            extract pieces of information from raw stock data and created
            portfolios and did the visualizations of them.
          </p>
          {/* <ul>
            <li>Gathered raw Stock data and preprocessed.</li>
            <li>Looked for trends in the stock price and visualized them.</li>
            <li>Analyzed correlation among different stocks and Indexes.</li>
            <li>
              Calculated and visualized the volatility of a stock and compared
              them with other stocks.
            </li>
            <li>
              Created trade calls using Bollinger band analysis and moving
              averages over different spans of time.
            </li>
            <li>
              Created different Machine Learning models and calculated and
              evaluated them on different matrics.
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}
