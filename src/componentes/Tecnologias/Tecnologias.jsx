import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Tecnologias.module.css';


import JavaScript from '../../assets/JavaScript.svg';
import Css from '../../assets/CSS.svg';
import Html from '../../assets/HTML.svg';
import ReactSVG from '../../assets/REACT.svg';
import Node from '../../assets/Node.svg';
import Mysql from '../../assets/Mysql.svg';
import Postgres from '../../assets/Postgres.svg';

export default function Tecnologias() {
  const technologies = [
    JavaScript,
    Css,
    Html,
    ReactSVG,
    Node,
    Mysql,
    Postgres
  ];

  const renderTechnologies = () => {
    return technologies.map((technology, index) => (
      <div key={index} className={`${styles.card} ${styles['carousel-center']}`}>
        <img src={technology} className={styles.icons} alt={`Technology ${index}`} />
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      
      <AliceCarousel
        mouseTracking
        items={renderTechnologies()}
        responsive={{
          0: { items: 1 },
          600: { items: 1 },
          1024: { items: 1 }
        }}
      />
    </div>
  );
}
