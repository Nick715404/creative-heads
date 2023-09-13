'use client'

import styles from './Border.module.css';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

export default function Border({ date, title }) {
  return (
    <motion.div
      variants={fadeIn('up', 0.8)}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0.2 }}
      className={styles.border}>
      <div className={styles.border__date}>
        <span>{date}</span>
      </div>
      <div className={styles.border__title}>
        <span>{title}</span>
      </div>
    </motion.div>
  )
}
