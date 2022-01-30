import React from "react";
import { useFetchFromFirebase } from "../data";
import ReactMarkdown from "react-markdown";


const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function get_date_to_show(start_date_string, end_date_string) {
  if (start_date_string == end_date_string) {
    return start_date_string;
  } else if (end_date_string === "Feb 2022") {
    return start_date_string + " - " + "Present";
  } else {
    return start_date_string + " - " + end_date_string;
  }
}

function get_diff_date_to_show(start_date_object, end_date_object) {
  // console.log(start_date_object, end_date_object);
  var all_diff_months = month_diff(start_date_object, end_date_object);
  var diff_month = all_diff_months % 12;
  var diff_year = Math.floor(all_diff_months / 12);
  var result = "";

  if (diff_month > 0) {
    result += diff_month + (diff_month > 1 ? " months" : " month");
  }
  if (diff_year > 0) {
    result += " " + diff_year + (diff_year > 1 ? " years" : " year");
  }
  // console.log(diff_month, diff_year);
  // console.log(result);
  return result;
}

function month_diff(d1, d2) {
  const yearsDifference = d2.getFullYear() - d1.getFullYear();
  const monthsDifference = d2.getMonth() - d1.getMonth();
  const daysDifference = d2.getDate() - d1.getDate();
  let months = monthsDifference + yearsDifference * 12;
  if (daysDifference > 0) {
    months++;
  }
  return months;
}

function get_month_and_year(date_object) {
  const year = date_object.getFullYear();
  const month = months[date_object.getMonth()];
  const time = month + " " + year;
  return time;
}

export default function About() {
  const { data: jobs, loading } = useFetchFromFirebase("jobs", ["id", "desc"]);
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
              let start_date_raw = new Date(
                parseInt(job.start_date.seconds) * 1000
              );
              let end_date_raw = new Date(
                parseInt(job.end_date.seconds) * 1000
              );

              let start_date = get_month_and_year(start_date_raw);
              let end_date = get_month_and_year(end_date_raw);

              let date_to_show = get_date_to_show(start_date, end_date);
              let diff_date_to_show = get_diff_date_to_show(
                start_date_raw,
                end_date_raw
              );
              return (
                <div className="jobs__job" key={index}>
                  <h2 className="text-secondary">{job.title}</h2>
                  <h3>
                    {job.company} • {job.employment_type}
                  </h3>
                  <h4 style={{ opacity: 0.75 }}>
                    {date_to_show} • {diff_date_to_show}
                  </h4>
                  <h4 style={{ opacity: 0.75 }}>{job.place}</h4>
                  <ReactMarkdown children={job.desc.replaceAll("\\n", "\n")} />
                </div>
              );
            })}
      </div>
    </section>
  );
}
