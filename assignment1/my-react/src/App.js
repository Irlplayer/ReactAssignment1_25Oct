import logo from './logo.svg';
import './App.css';
import { FaStar } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import {FaInstagram  } from "react-icons/fa";
import { FaLinkedinIn} from "react-icons/fa";
import {FaGithub } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>My first React App</h1>
     

<div style={{textAlign:'row'}}><FaStar color='yellow'></FaStar><FaStar color='yellow'></FaStar><FaStar color='yellow'></FaStar><FaStar color='yellow'></FaStar><FaStar></FaStar> </div>       
              
       <h1>This is mustafa from dst internship</h1>
       <h3>Front Development Internships includes</h3>
       <div style={{textAlign:'row'}}><FaReact color='blue'></FaReact> <FaJsSquare color='yellow'></FaJsSquare> <FaHtml5 color='orange'></FaHtml5><FaCss3Alt color='blue'></FaCss3Alt></div>
       <div style={{textAlign:'row'}}><h3>connect with me on </h3><FaLinkedinIn color='blue'></FaLinkedinIn><FaGithub color='black'></FaGithub><FaInstagram color='purple'></FaInstagram></div>


    
      </header>
    </div>
  );
}

export default App;
