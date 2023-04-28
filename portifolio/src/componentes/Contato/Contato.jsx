import styles from './Contato.module.css';
import React from "react";
import Emilly1 from '../../assets/Emilly3.png'
import {AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";






export default function Contato(){

    return(
    
         <div className={styles.container}>
            <div className={styles.row}>
             <div className={styles.card}>
                <div className={styles.header}>
                 </div>
                 <img src={Emilly1} className={styles.emilly}/>
                 <div className={styles.caixa}>
                  <AiOutlineLinkedin className={styles.linkedin}/><p className={styles.texto1}>/emilly-finco</p>
                  <AiFillGithub className={styles.github}/><p className={styles.texto2}>Emillycristina</p>
                 </div>
             </div>
            </div>
         </div>
       
        
      
        
     
  

    )




}