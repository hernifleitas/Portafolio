import {Header} from './components/Header.jsx'
import {Home} from './components/Home.jsx'
import {About} from './components/About.jsx'
import { Habilidades } from './components/Habilidades.jsx';
import {Projects} from './components/Projects.jsx';
import './App.css';
import { Contact } from './components/Contact.jsx';


function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Habilidades/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
