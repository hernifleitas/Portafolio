import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/header.css';
import miLogo from '../assets/public/images/logo.jpg';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

    const closeMenu = () =>{
        if(window.innerWidth<= 768){
            setMenuOpen(false);
        }
    } 

  return (
    <header className="header">
      <div className="logo">
        <a href=" "><img src={miLogo} alt="Hernán" className="profile-img" /></a>
      </div>

      {/* Menú de navegación */}
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="home" smooth={true} onClick={closeMenu} duration={500}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} onClick={closeMenu} duration={500}>
              Sobre mí
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} onClick={closeMenu} duration={500}>
              Habilidades
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} onClick={closeMenu} duration={500}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} onClick={closeMenu} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      {/* Icono de hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};