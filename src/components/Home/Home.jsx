import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_content}>
        <span>Olá, meu nome é João</span>
        <span>e sou Desenvolvedor <span className={styles.effect}>Front-End</span> </span>
        <span className={styles.home_button}>See My Projects</span>
      </div>
    </div>
  )
}

export default Home;