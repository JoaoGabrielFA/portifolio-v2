import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { MdMailOutline } from "react-icons/md";

function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.header_content}>
          <ul className={styles.header_content_list}>
            {/* <li><Link to='/'>HOME</Link></li>
            <li><Link to='/projects'>PROJECTS</Link></li> */}
            <li>INÍCIO</li>
            <li>PROJETOS</li>
            <li>SOBRE</li>
            <li>CONTATO</li>
          </ul>
          <div className={styles.header_title}>
            {/* <span>JOÃO ANTUNES</span> */}
            <MdMailOutline size={'20px'}/>
            <span>JOAOGABRIELFA.DEV@GMAIL.COM</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;