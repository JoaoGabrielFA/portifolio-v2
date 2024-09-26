import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <FaLinkedin/>
        <FaGithub/>
      </div>
    </footer>
  )
}

export default Footer;