import React, { useState } from 'react';
import styles from './Projects.module.css';
import { projects } from '../../data';

function Projects() {

  const [projectImage, setProjectImage] = useState(projects[0].img);
  const [projectTitle, setProjectTitle] = useState(projects[0].title);
  const [projectText, setProjectText] = useState(projects[0].text);
  const [projectRepository, setProjectRepository] = useState(projects[0].repository);

  const handleProjectClick = (number) => {
    setProjectTitle(projects[number].title);
    setProjectText(projects[number].text);
    setProjectImage(projects[number].img);
    setProjectRepository(projects[number].repository);
  };

  return (
    <div className={styles.projects}>
      <div className={styles.projects_content}>
        <span className={styles.projects_title}>MEUS PROJETOS</span>
        <div className={styles.projects_slider}>
          <div className={styles.projects_slider_image} style={{ backgroundImage: `url(${projectImage})` }}>
            <div className={styles.projects_cards}>
              {projects.map((project, i) => {
                return <div
                  className={styles.card_img}
                  style={{ backgroundImage: `url(${project.img})` }}
                  onClick={() => handleProjectClick(i)}
                />
              })}
            </div>
          </div>
          <div className={styles.projects_slider_content}>
            <span className={styles.projects_slider_content_title}>{projectTitle}</span>
            <span className={styles.projects_slider_content_text}>{projectText}</span>
            <a className={styles.projects_slider_content_button} href={projectRepository} target='_blank'>Ver Repositório</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;