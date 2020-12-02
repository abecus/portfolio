import React from "react";
import { blogs } from "../data";

export default function myBlogs() {
  return (
    <div className="blogs" id="blog">
      <div className="blogs__bio-image">
        <h1 className="text-secondary">My Blogs</h1>
      </div>
      <div className="blogs__items">
        {blogs.map((blog, index) => {
          const { title, link, img, desc } = blog;
          return (
            <article key={index} className="blogs__items__item">
              <div className="text-container">
                <h2 className="blogs__items__item__title">{title}</h2>
                <p className="blogs__items__item__description">
                  {desc.substring(0, 270)}...
                  <a
                    href={link}
                    target="_"
                    className="blogs__items__item__link text-secondary"
                  >
                    read more
                  </a>
                </p>
              </div>
              <div className="img-container">
                <img
                  className="blogs__items__item__img"
                  src={img}
                  alt={title}
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
