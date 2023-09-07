'use client'

import styles from './Hero.module.css';
import { fadeIn } from '@/app/transitionVariant';
import { motion } from 'framer-motion';

import Border from './components/_border/Border';

export default function Hero() {
  return (
    <section id='hero' className={styles.hero}>
      <div className="container">
        <div className={styles.hero__wrapper}>
          <motion.div
            variants={fadeIn('down', 0.8)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.hero__subtitle}>
            <p>We come up with ‘how it would look attractive’ and 'how it would work effectively'.</p>
          </motion.div>
          <motion.div className={styles.hero__title_box}>
            <h1 className={styles.hero__title}>
              <motion.span
                className={styles.title__line}
                variants={fadeIn('down', 0.4)}
                viewport={{ once: true, amount: 0.2 }}
                initial={'hidden'}
                whileInView={'show'}
              >We create the </motion.span>
              <motion.span
                className={styles.title_span}
                variants={fadeIn('down', 0.6)}
                viewport={{ once: true, amount: 0.2 }}
                initial={'hidden'}
                whileInView={'show'}>
                digital future </motion.span>
              <motion.span
                className={styles.title__line}
                variants={fadeIn('down', 1)}
                viewport={{ once: true, amount: 0.2 }}
                initial={'hidden'}
                whileInView={'show'}>
                for Your business</motion.span>
            </h1>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 1.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.hero__border}>
            <Border date={'2023'} text={'Scroll dawn'} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
