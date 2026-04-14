import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Fundo escuro que aparece quando o menu está aberto */}
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
      <h1 className="logo">Kaik</h1>
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            Sobre
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            Projetos
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
