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
