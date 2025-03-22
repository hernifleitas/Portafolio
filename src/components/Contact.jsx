import React from 'react';
import '../styles/contact.css';
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  return (
    <footer id='contact' className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/hernandevweb/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/hernan.fleitas.338" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://wa.me/+5491158286890?text=Hola,%20Hernan%20Fleitas%20te%20quiero%20contactar" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/hernan-fleitas-250988236/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/hernifleitas" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:hernifleitas235@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-text">© 2025 Hernán Fleitas | Todos los derechos reservados</p>
    </footer>
  );
};