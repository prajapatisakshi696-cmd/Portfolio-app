import React, { createContext, useState } from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Theme Context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("purple");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`min-h-screen font-sans ${
          theme === "purple" ? "text-white" : "text-white"
        }`}
      >
        <Navbar />

        <main className="pt-20">
          <Hero />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
