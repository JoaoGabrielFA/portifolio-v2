import React from 'react';
import styles from './Skills.module.css';
import SkillCard from '../SkillCard/SkillCard';
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
 
function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.skills_content}>
        {/* <span className={styles.skills_content_title}>Habilidades</span> */}
        <div className={styles.skills_content_skillCase}>
          <div className={styles.skillCard}><FaReact size={64} style={{color: '#61DAFB'}}/></div>
          <div className={styles.skillCard}><FaJsSquare size={64} style={{color: '#F7DF1E'}}/></div>
          <div className={styles.skillCard}><FaCss3Alt size={64} style={{color: '#1572B6'}}/></div>
          <div className={styles.skillCard}><FaHtml5 size={64} style={{color: '#E34F26'}}/></div>
          <div className={styles.skillCard}><FaGitAlt size={64} style={{color: '#F05032'}}/></div>
          <div className={styles.skillCard}><FaAws size={64} style={{color: '#FF9900'}}/></div>
          <div className={styles.skillCard}><SiCsharp size={64} style={{color: '#9B4993'}}/></div>
          <div className={styles.skillCard}><FaPython size={64} style={{color: '#FFD43B'}}/></div>
          <div className={styles.skillCard}><FaJava size={64} style={{color: '#007396'}}/></div>
        </div>
      </div>
    </div>
  )
}

export default Skills;