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
    {
      id: 4,
      title: 'Projeto 4',
      description: 'Descrição breve do projeto 4.',
      link: 'https://github.com/seu-usuario/projeto4',
      image: imgProject, // Placeholder image
    },
    {
      id: 5,
      title: 'Projeto 5',
      description: 'Descrição breve do projeto 5.',
      link: 'https://github.com/seu-usuario/projeto5',
      image: imgProject, // Placeholder image
    },
    {
      id: 6,
      title: 'Projeto 6',
      description: 'Descrição breve do projeto 6.',
      link: 'https://github.com/seu-usuario/projeto6',
      image: imgProject, // Placeholder image
    }
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
