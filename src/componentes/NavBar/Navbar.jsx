import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";





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
          <Link to="/Contato" className={styles.linkcontato}>
          CONTATO
          </Link>
        </li>
       </ul>
    </nav>
  </div>
);
} 