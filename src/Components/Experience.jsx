import React from "react";
import "./Experience.css";

const Experience = () => {
  const programmingLanguages = ["JavaScript", "HTML", "CSS", "Java", "Python"];

  return (
    <section className="experience-section" id="experience">
      <h2>Minha Experiência</h2>
      <div className="experience-content">
        <h3>Linguagens de Programação</h3>
        <ul className="languages-list">
          {programmingLanguages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
