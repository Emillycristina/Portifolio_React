import styles from './Primeiro.module.css';
import Emilly from '../../assets/Emilly2.png'
import mao from '../../assets/mao-acenando.png'
import laço from '../../assets/laço.png'
import foguete from  '../../assets/rocket.png'

export default function Primeiro(){



    return (
       
      <div className={styles.row}>
        <div className={styles.row1}>
        <img src={Emilly} alt="Emilly" className={styles.emilly}/>
        </div>
        
        
        <div className={styles.row2}>
        <p className={styles.texto1}>OLÁ<img src={mao} alt="Mão" className={styles.mao}/>,MEU NOME É <p className={styles.rosa}>EMILLY</p>  </p>
        <p className={styles.texto2}>DESENVOLVEDORA FRONT-END.</p><img src={foguete} alt="Foguete" className={styles.foguete}/>
        </div>

        <img src={laço} alt="laço" className={styles.laço}/>
      </div>
  )
}