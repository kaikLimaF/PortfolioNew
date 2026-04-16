import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Sobre from "./Components/Sobre";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sobre />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
