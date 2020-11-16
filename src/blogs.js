import React from "react";
import { blogs } from "./data";
import "./App.css";

export default function myBlogs() {
  return (
    <div className="blogs">
      {blogs.map((blog, index) => {
        const { title, link, img, desc } = blog;
        return (
          <article key={index} className="single-blog">
            <h3 className="title">{title}</h3>
            <img src={img} alt={title} />
            <div>
              <a href={link} target="_" className="link">
                Link to blog
              </a>
            </div>
            <p>{desc}</p>
          </article>
        );
      })}
    </div>
  );
}
