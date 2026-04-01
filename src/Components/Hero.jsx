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
      <div className="hero-sobre">
        <h1>Sobre Mim</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe ut veritatis, ipsa assumenda doloribus illum eaque. Accusamus
          aspernatur tenetur aut vel, voluptate deleniti maiores quas similique
          mollitia nisi illo.
        </p>
      </div>
    </section>
  );
};

export default Hero;
