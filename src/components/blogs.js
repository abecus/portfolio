import React from "react";
import { blogs } from "../data";

export default function myBlogs() {
  return (
    <div className="blogs" id="blog">
      {blogs.map((blog, index) => {
        const { title, link, img, desc } = blog;
        return (
          <article key={index} className="single-blog">
            <img src={img} alt={title} />
            <h3 className="title">{title}</h3>
            <p className="description">
              {desc.substring(0, 250)}...
              <a href={link} target="_" className="link">
                read more
              </a>
            </p>
          </article>
        );
      })}
    </div>
  );
}
