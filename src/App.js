import "./css/main.css";
import React, { useEffect } from "react";
import Home from "./components/home";
import Projects from "./components/projects";
import Mail from "./components/mail";
import Footer from "./components/footer";
import About from "./components/about";
import Blogs from "./components/blogs";
import NavBar from "./components/navbar";
import TextInLine from "./components/textInline";

function App() {
  function checkSize() {
    const fontSize = Math.min(1, window.innerWidth / 1000 + 0.1);
    const tab = Math.min(1.5, window.innerWidth / 1000 - 0.5);

    document.documentElement.style.setProperty("--font-size", `${fontSize}rem`);
    document.documentElement.style.setProperty("--tab", `${tab}rem`);
  }

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    checkSize();
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Blogs />
      <Mail />
      <Footer />
    </div>
  );
}

export default App;
