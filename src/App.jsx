import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-400">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
