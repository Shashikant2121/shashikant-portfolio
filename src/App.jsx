import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <div className="reveal">
          <About />
        </div>

        <div className="reveal">
          <Skills />
        </div>

        <div className="reveal">
          <Projects />
        </div>

        <div className="reveal">
          <Education />
        </div>

        <div className="reveal">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
