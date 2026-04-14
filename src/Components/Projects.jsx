import React from 'react';
import './Projects.css';
import imgProject from '..//img/projeto.png'; // Imagem representando projetos

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Descrição breve do projeto 1.',
      link: 'https://github.com/seu-usuario/projeto1',
      image: imgProject, // Placeholder image
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Descrição breve do projeto 2.',
      link: 'https://github.com/seu-usuario/projeto2',
      image:  imgProject, // Placeholder image
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Descrição breve do projeto 3.',
      link: 'https://github.com/seu-usuario/projeto3',
      image: imgProject, // Placeholder image
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>Meus Projetos</h2>
      <div className="projects-container">
        {projectList.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
