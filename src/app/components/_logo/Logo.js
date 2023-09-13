'use client'

import styles from './Logo.module.css';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

import Img from 'public/img/logo.svg';

export default function Logo() {

  return (
    <motion.div
      variants={fadeIn('right', 0.0)}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        className={styles.logo}>
        <Img />
      </motion.div>
    </motion.div>
  )
}
