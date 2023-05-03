import styles from './Contato.module.css';
import React from "react";
import Emilly1 from '../../assets/Emilly3.png'
import {AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";






export default function Contato(){

    return(
    
         <div className={styles.container}>
            <div className={styles.row}>
             <div className={styles.card}>
                <div className={styles.header}>
                    <p className={styles.redes}>REDES SOCIAIS</p>
                 </div>
                 <img src={Emilly1} className={styles.emilly}/>
                 <div className={styles.caixa}>
                  <AiOutlineLinkedin className={styles.linkedin}/><Link to="https://www.linkedin.com/in/emilly-finco/" className={styles.texto1}>/emilly-finco</Link>
                  <AiFillGithub className={styles.github}/><Link to="https://github.com/Emillycristina"className={styles.texto2}>Emillycristina</Link><br/>
                  <MdEmail className={styles.email}/><p className={styles.texto3}>emilly.c.f@hotmail.com</p>
                 </div>
             </div>
            </div>
         </div>
       
        
      
        
     
  

    )




}