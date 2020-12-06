import React, { useState, useEffect } from "react";

const words = ["Developer", "Programmer", "Creator", "Problem Solver."];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    const front_text = document.querySelector(".front_text");
    const texts = document.querySelector(".texts");

    //Moving Animation Event
    texts.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
      front_text.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    texts.addEventListener("mouseenter", (e) => {
      texts.style.transition = "all 1s ease";
      texts.style.transform = "rotateZ(-17deg)";
      // front_text.style.transform = "translateZ(200px)";
      // front_text.style.text_shadow = "translateZ(200px) "
    });
    //Animate Out
    texts.addEventListener("mouseleave", (e) => {
      texts.style.transition = "all 1s ease";
      front_text.style.transition = "all 0.5s ease";
      texts.style.transform = "rotateZ(-10deg)";
      front_text.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
  }, []);

  return (
    <div className="home" id="home">
      {/* <h2>Hello There! I am,</h2> */}
      <div className="home__content">
        <div className="top-line">
          <h1 className="name">
            {/* <span className="name__full-name"> */}
            Abdul <span className="name__last">Salam</span>
            {/* </span> */}
          </h1>
          <h1 className="top-line__typed">
            The {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
          </h1>
        </div>
        <h2>Welcome to my Website</h2>
      </div>
      <div className="logo">
        <div className="texts">
          <h1 className="front_text">A</h1>
          <h1 className="back_text">A</h1>
        </div>
      </div>
    </div>
  );
}
