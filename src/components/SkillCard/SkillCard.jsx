import React from 'react'
import styles from './SkillCard.module.css';

function SkillCard({ icon, color }) {
  console.log(icon.size);
  return (
    <div className={styles.skillCard}>
      {icon}
    </div>
  )
}

export default SkillCard;