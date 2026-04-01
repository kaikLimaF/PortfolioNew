import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      {/* Adicione outros componentes aqui, como Sobre, Projetos, Contato, etc. */}
    </div>
  );
}

export default App;
