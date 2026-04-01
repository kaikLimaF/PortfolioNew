import React from "react";
import "./Navbar.css";

const Navbar = () => {

    return (
        <nav className="navbar"> 
        <h1 className="logo">Kaik</h1>
        <ul className="nav-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
            </ul>
        
        </nav>
            
    )
}


export default Navbar;