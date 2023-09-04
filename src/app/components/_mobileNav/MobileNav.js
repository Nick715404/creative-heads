'use client'

import React, { useState } from 'react';
import styles from './MobileNav.module.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg'

export default function MobileNav() {

  const [openMenu, setOpenMenu] = useState(false);

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
      <div className={styles.burger__btn_box} onClick={() => setOpenMenu(true)}>
        <CgMenuRight className={styles.burger_btn} />
      </div>
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className={styles.mobileNav__wrapper}>
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