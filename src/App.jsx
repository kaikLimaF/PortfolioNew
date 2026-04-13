import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
