import "./css/main.css";
import React from "react";
import Home from "./components/home";
import Projects from "./components/projects";
import Mail from "./components/mail";
import Footer from "./components/footer";
import About from "./components/about";
import Blogs from "./components/blogs";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TextInLine from "./components/textInline";
// import Background from "./components/background";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Mail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
