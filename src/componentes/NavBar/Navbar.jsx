import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import {AiFillGithub } from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
//import { MdEmail } from "react-icons/md";





export default function NavBar(){

  

return (
  <div>
    <nav className={styles.nav}>
     
      <div className={styles.menu} >
        
      </div>
       <ul className={styles.navlist}>
        <li className={styles.link}>
          <Link to="/Home" className={styles.linkhome}>
          HOME
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="/Projetos" className={styles.linkprojeto}>
          PROJETOS
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="/Projetos" className={styles.linkprojeto}>
          TECNOLOGIAS
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="/Projetos" className={styles.linkprojeto}>
          QUEM SOU EU?
          </Link>
        </li>
        <li className={styles.link}>
        <FaLinkedinIn className={styles.linkedin}/><Link to="https://www.linkedin.com/in/emilly-finco/"></Link>
        <AiFillGithub className={styles.github}/><Link to="https://github.com/Emillycristina"></Link>
        
        </li>
       </ul>
    </nav>
  </div>
);
} 