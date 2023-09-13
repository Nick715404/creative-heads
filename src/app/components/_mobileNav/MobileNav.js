'use client'

import { useState, useEffect } from 'react';
import styles from './MobileNav.module.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg'

export default function MobileNav() {

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (openMenu) {
        body.classList.add('body-active');
      } else {
        body.classList.remove('body-active');
      }
    }
  }, [openMenu]);

  const menuVariants = {
    hidden: {
      x: '102%',
    },
    show: {
      x: 0,
      transition: {
        ease: [0.24, 0.9, 0.69, 0.91],
      },
    },
  };

  return (
    <nav className={styles.mobileNav}>
      <div className={styles.burger__btn_box} 
      onClick={() => setOpenMenu(true)}>
        <CgMenuRight id='burger' className={styles.burger_btn} />
      </div>
      <motion.div
        className={styles.mobileNav__wrapper}
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
      >
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <Link className={styles.link} to='hero' spy={true} smooth={true} offset={50} duration={500}>Home</Link>
          </li>
          <li className={styles.list__item}>
            <Link className={styles.link} to='projects' spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
          </li>
          <li className={styles.list__item}>
            <Link className={styles.link} to='process' spy={true} smooth={true} offset={90} duration={500}>Process</Link>
          </li>
        </ul>
        <div onClick={() => setOpenMenu(false)}>
          <IoMdClose className={styles.close_btn} />
        </div>
      </motion.div>
    </nav>
  )
}
