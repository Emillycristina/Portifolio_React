import styles from './Tecnologias.module.css';
import React from "react";
import JavaScript from '../../assets/JavaScript.svg'
import Css from '../../assets/CSS.svg'
import Html from '../../assets/HTML.svg'
import ReactSVG from '../../assets/REACT.svg'
import Node from '../../assets/Node.svg'
import Mysql from '../../assets/Mysql.svg'
import Postgres from '../../assets/Postgres.svg'

export default function Tecnologias (){



    return (
    
    <div className={styles.container}>
         
       
    
    <div className={styles.row}>
     <div className={styles.card}>
     <img src={JavaScript} className={styles.icons}/>
     <p></p>
      
   </div>

   <div className={styles.card}>
   <img src={Css} className={styles.icons}/>
   </div>

   <div className={styles.card}>
   <img src={Html} className={styles.icons}/>
   </div>
   <div className={styles.card} >
   <img src={ReactSVG} className={styles.icons}/>
   </div>
   <div className={styles.card}>
   <img src={Node} className={styles.icons}/>
   </div>
   <div className={styles.card}>
   <img src={Mysql} className={styles.icons}/>
   </div>
   <div className={styles.card}>
   <img src={Postgres} className={styles.icons}/>
   </div>
   <div>
  </div>
 </div>
</div>


 

    )


}