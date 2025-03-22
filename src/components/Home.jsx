import '../styles/home.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Home = () =>{
    const handleDownload =()=>{
        const url = '/CvHERNAN.pdf'
        const link = document.createElement('a');
        link.href = url
        link.download = 'Curriculum Hernán FLEiTAS'
        link.click();
    } 
    return(
        <section id="home" className="section-home">
            <div className="home-content">
                <h1>Hernán fleitas</h1>
                 <p>Full stack developer</p>
                 <p>JavaScript | React JS | Node JS | Git | MYSQL | HTML | CSS</p>

                 <div className="social-icons">
                 <a href="https://github.com/hernifleitas" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='icon' size={70} color="#000" />
                 </a>

                 <a href="https://www.linkedin.com/in/hernan-fleitas-250988236/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className='icon' size={70} color="#0077b5" />
                 </a>

                 <a href="https://www.instagram.com/hernandevweb/" target="_blank" rel="noopener noreferrer">
                 <FaInstagram className='icon' size={70} color="#E4405F" />
                </a>
                
                 </div>

             <button onClick={handleDownload} className="view-cv-btn">DESCARGAR CV</button>
                 <button className='view-contact-btn'><a href="https://wa.me/+5491158286890?text=Hola,%20Hernan%20Fleitas%20tengo%20una%20propuesta%20de%20trabajo%20Para%20vos">CONTACTAME</a></button>
            </div>
   

        </section>
      
    )
}