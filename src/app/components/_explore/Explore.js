'use client'

import styles from './Explore.module.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

export default function Explore() {
  return (
    <motion.div
      variants={fadeIn('down', 0.4)}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0.2 }}
      className={styles.explore}>
      <div className={styles.explore__title_box}>
        <h4 className={styles.explore__title}>Explore</h4>
      </div>
      <div className={styles.explore__list_box}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <Link className={styles.link} to='hero' spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link className={styles.link} to='projects' spy={true} smooth={true} offset={50} duration={500}>
              Projects
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link className={styles.link} to='process' spy={true} smooth={true} offset={50} duration={500}>
              Process
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
