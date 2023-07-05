import styles from './Contato.module.css';
import React from "react";
import Emilly1 from '../../assets/Emilly3.png'
import Emilly from '../../assets/foto_perfil.png'
import Curriculo from '../../assets/Curriculo Emilly.pdf'
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa"





export default function Contato(){
    const handleDownload = () => {
        const fileUrl = Curriculo;
        window.open(fileUrl, '_blank');
      }

    return(
    
         <div className={styles.container}>
           <div className={styles.row}>
             <img src={Emilly} className={styles.Emilly} ></img>
           </div>
           <div className={styles.row2}>
             <h3> QUEM SOU EU?</h3>
              <p className={styles.paragrafo}>
                 Olá, meu nome é Emilly, sou estudante de desenvolvimento front-end,
                 atualmente estou buscando melhorar meus conhecimentos em React e React-Native, 
                 tenho vários projetos em meu Github com consumo de API's, posteriormente pretendo
                 me aprofundar em Node e Banco de dados relacionais. Espero que goste do meu portifólio!

                <p className={styles.paragrafo}>Você consegue ter acesso a mais informações baixando meu curriculo:</p>
                 <button className={styles.button} onClick={handleDownload}>Curriculo em PDF<FaFilePdf/></button>
              </p>
           </div>

         </div>
       
        
      
        
     
  

    )




}