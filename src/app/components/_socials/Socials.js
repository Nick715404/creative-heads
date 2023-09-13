'use client'

import styles from './Socials.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

export default function Socials() {
  return (
    <motion.div
      variants={fadeIn('down', 0.6)}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0.2 }}
      className={styles.socials}>
      <div className={styles.socials__title_box}>
        <h4 className={styles.socials__title}>Follow us</h4>
      </div>
      <div className={styles.socials__list_box}>
        <ul className={styles.socials_list}>
          <li className={styles.socials_list__item}>
            <Link className={styles.socials_list__link} href={'#'}>Instagram</Link>
          </li>
          <li className={styles.socials_list__item}>
            <Link className={styles.socials_list__link} href={'#'}>Vk</Link>
          </li>
          <li className={styles.socials_list__item}>
            <Link className={styles.socials_list__link} href={'#'}>Behance</Link>
          </li>
          <li className={styles.socials_list__item}>
            <Link className={styles.socials_list__link} href={'#'}>Dribbble</Link>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
