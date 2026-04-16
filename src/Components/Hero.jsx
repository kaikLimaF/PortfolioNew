import React from "react";
import "./Hero.css";
import imgProfile from "../img/a12.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={imgProfile} alt="Minha Imagem" />
        </div>
        <div className="hero-text">
          <h1>Olá, eu sou Kaik</h1>
          <p>Desenvolvedor Front-end | Criador de Experiências Digitais</p>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
