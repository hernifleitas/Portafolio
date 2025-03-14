import { FaHtml5, FaCss3, FaJs, FaReact, FaDatabase, FaGit, FaNodeJs } from 'react-icons/fa'
import '../styles/habilidades.css'

export const Habilidades = () =>{
    return(
        <section id="skills" className="habilidades">
            <div className="habilidades-content">
                <h1>Mis habilidades.</h1>
            <div className='habilidades-icons'>
            <FaHtml5 className='icon-h' color="#E44D26"/>
                 <FaCss3 className='icon-h' color="#1572B6" />
                 <FaJs  className='icon-h'color="#F7DF1E" />
                 <FaReact  className='icon-h'color="#61DAFB" />
                 <FaNodeJs className='icon-h' color="#4479A1" />
                 <FaDatabase className='icon-h' color="#F1502F" />
                 <FaGit  className='icon-h'color="#8CC84B" />      
    </div>
            </div>
        </section>
    )
}