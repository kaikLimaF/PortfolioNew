import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
return (
<div className="App">
<Navbar />
<Hero />
<Experience />
<Projects />
<Contact />
{/* Adicione outros componentes aqui, como Sobre, Projetos, Contato, etc. */}
</div>
);
}

export default App;
