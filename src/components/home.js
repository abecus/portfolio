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

  return (
    <div className="home" id="home">
      <div className="home__content">
        <div className="top-line">
          <h1 className="name">
            Abdul <span className="name__last">Salam</span>
          </h1>
          <h1 className="top-line__typed">
            The {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
          </h1>
        </div>
        <h2>Welcome to my Website</h2>
      </div>
    </div>
  );
}
