import React from "react";
import "./Experience.css";
import imgExperience from "..//img/Linguagens.png"; // Imagem representando experiência

const Experience = () => {
  const programmingLanguages = ["JavaScript", "HTML", "CSS", "Java", "Python"];

  return (
    <section className="experience-section" id="experience">
      <h2>Minha Experiência</h2>
      <div className="experience-content">
        <h3>Linguagens de Programação</h3>
        <img src={imgExperience} alt="Linguagens de Programação" />
      </div>
    </section>
  );
};

export default Experience;
