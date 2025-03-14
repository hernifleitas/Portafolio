import '../styles/about.css';
import miImagen from '../assets/public/images/yo.jpg'

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>Sobre mí</h2>

        <p>
          ¡Hola! Soy Hernán Fleitas, un desarrollador web apasionado por la creación de experiencias interactivas y funcionales.
          Me encanta trabajar con tecnologías como React, JavaScript, HTML, CSS y más. Siempre estoy aprendiendo y mejorando mis habilidades.
        </p>
        <p>
          Tengo experiencia creando sitios web dinámicos, aplicaciones de una sola página (SPA) y todo tipo de proyectos que buscan brindar valor a los usuarios.
        </p>

        <p>
         En mi tiempo libre, me gusta estudiar Inglés, entrenar Kick Boxing y escuchar Musica.
        </p>
        <div className="about-img-container">
          <img 
            src={miImagen} 
            alt="Hernán Fleitas"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};