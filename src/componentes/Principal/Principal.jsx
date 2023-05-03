import styles from './Principal.module.css';
import React, { useEffect, useState } from "react";
import {BsCalculator, BsCashCoin, BsFillShieldLockFill} from "react-icons/bs";
import {RiInstagramFill, RiScales2Fill} from "react-icons/ri";





export default function Principal(){
  const [repos, setRepos] = useState([]); 

  useEffect(() => {
  fetch('https://api.github.com/users/Emillycristina/repos')
  .then( resposta => {
    return resposta.json()
})
.then ( json => {
    console.log(json);
    setRepos(json)
})

.catch( err =>  {
   console.log("ops")
})
  }, [])

    return(
     <div className={styles.container}>
      <div className={styles.row2}>
       
      {repos[1] && (
        <div className={styles.card}>
         <h4>{repos[1].name}</h4>
         {/* <p>{repos[1].url}</p> */}
       
        <BsCalculator className={styles.calculadora}/>
        </div>
      )}
      {repos[8] && (
      <div className={styles.card}>
        <h4>{repos[8].name}</h4>
        {/* <p>{repos[2].url}</p> */}
        <RiScales2Fill className={styles.balanca}/>
      </div>
      )}
      {repos[3] && (
      <div className={styles.card}>
        <h4>{repos[3].name}</h4>
        {/* <p>{repos[3].url}</p> */}
       <BsCashCoin className={styles.moeda}/>
      </div>
      )}
      {repos[7] && (
      <div  className={styles.cardmaior} style={{ order: 2 }}>
        <h4>{repos[7].name}</h4>
        {/* <p>{repos[7].url}</p> */}
       <BsFillShieldLockFill className={styles.cadeado}/>
      </div>
      )}
      {repos[2] && (
      <div className={styles.cardlateral}>
        <h4>{repos[2].name}</h4>
        {/* <p>{repos[8].url}</p> */}
        <RiInstagramFill  className={styles.instagram}/>
        
      </div>
      )}
      <div>
     </div>
    </div>
  </div>


    )




}