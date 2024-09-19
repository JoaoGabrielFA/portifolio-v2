import React from 'react'

import styles from './ProjectCard.module.css';

function ProjectCard({ title, img }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_img} style={{ backgroundImage: `url(${img})` }}></div>
      {/* <span>{title}</span> */}
    </div>

  )
}

export default ProjectCard;