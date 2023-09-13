'use client'

import styles from './Works.module.css';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

import Cards from '../_cards/Cards';

export default function Works() {
  return (
    <section id='projects' className={styles.works}>
      <div className="container">
        <div className={styles.works__wrapper}>
          <motion.div
            className={styles.works__title_box}
            variants={fadeIn('up', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className={styles.works__title}>Our recent works</h2>
          </motion.div>
          <div className={styles.works__cards_box}>
            <Cards />
          </div>
        </div>
      </div>
    </section>
  )
}
