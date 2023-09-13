'use client'

import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

export default function Navbar() {
  return (
    <motion.nav
      variants={fadeIn('down', 0.0)}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0.2 }}
      className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Link className={styles.link} to='hero' spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link className={styles.link} to='projects' spy={true} smooth={true} offset={-50} duration={500}>
            Projects
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link className={styles.link} to='process' spy={true} smooth={true} offset={-30} duration={500}>
            Process
          </Link>
        </li>
      </ul>
    </motion.nav>
  )
}
