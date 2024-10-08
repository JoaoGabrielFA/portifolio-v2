import React from 'react';
import styles from './About.module.css';
import Skills from '../Skills/Skills';

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_content}>
        <span className={styles.about_content_title}>SOBRE MIM</span>
        <span className={styles.about_content_left_text}>Olá, sou um desenvolvedor iniciante com uma paixão por jogos e tecnologia. Nos meus momentos livres, me dedico à leitura e à criação de jogos. Minha especialidade como programador é o React.JS, mas também possuo conhecimentos em Java e C#. Recentemente, comecei a estudar AWS Cloud por conta própria, com o objetivo de me aprofundar mais em backend no futuro. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas.</span>

        <div className={styles.about_content_left}>
          <Skills/>
        </div>
      </div>
    </div>
  )
}

export default About;