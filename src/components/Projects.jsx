import React from 'react';
import '../styles/projects.css'; 

const proyectos = [
  {
    id: 1,
    titulo: 'Juego web',
    descripcion: 'Al pasar el mouse por el player, sumás puntos, Pero cuidado... Te pueden aparecer obstaculos.',
    tecnologias: ['HTML', 'CSS', 'JAVASCRIPT'],
    demo: 'https://juego-web-vert.vercel.app/',
    github: 'https://github.com/hernifleitas/Juego-WEB-',
    imagen: 'juegoweb.jpg',
  },
  {
    id: 2,
    titulo: 'Sitio web Freelance',
    descripcion: 'Sitio web para un cliente, Sirve para conocer sobre ellos, y sus horarios. Ademas Agiliza su modalidad de eventos, para inscribirse a pelear.',
    tecnologias: ['HTML','NodeJS', 'CSS', 'MySQL','ExpressJS'],
    demo: 'https://distritomarcial2.vercel.app/',
    github: 'https://github.com/hernifleitas/DistritoMarcial',
    imagen: 'webmarcial.jpg',
  },
  {
    id: 3,
    titulo: 'Sitio web Freelance',
    descripcion: 'Sitio web para cliente, daba a conocer sus servicios en el mundo del TAROT.',
    tecnologias: ['HTML', 'CSS', 'JAVASCRIPT'],
    demo: 'https://tarot-web.vercel.app/',
    github: 'https://github.com/hernifleitas/Tarot-WEB-',
    imagen: 'tarotweb.jpg',
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="proyectos-section">
      <h2>Mis Proyectos</h2>
      <div className="proyectos-container">
        {proyectos.map(proyecto => (
          <div key={proyecto.id} className="proyecto-card">
            <img src={require(`../assets/public/images/${proyecto.imagen}`)} alt={proyecto.titulo} />
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <p><strong>Tecnologías:</strong> {proyecto.tecnologias.join(', ')}</p>
            <div className="proyecto-links">
              <a href={proyecto.demo} target="_blank" rel="noopener noreferrer">Visitar web</a>
              <a href={proyecto.github} target="_blank" rel="noopener noreferrer">Repositorio GITHUB</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

