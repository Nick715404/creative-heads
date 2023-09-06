'use client'

import styles from './Text.module.css';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

export default function Text() {

  const gradientTitle = 'effective collaboration';

  const title = (
    <>
      Our approach and processes are focused on{' '}
      <motion.span
        variants={fadeIn('right', 0.6)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 0.2 }}
        className={styles.gradient_title}> {gradientTitle}</motion.span> and improving the user experience with your product.
    </>
  );

  const text = "Our studio offers quality customer service. We guarantee an individual approach, excellent results and complete satisfaction of your needs. We care about every customer and strive to exceed expectations. Contact us today to find out how we can help you succeed.";

  return (
    <>
      <div className={styles.title_box}>
        <motion.h2
          variants={fadeIn('right', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.2 }}
        >{title}</motion.h2>
      </div>
      <div className={styles.text__wrapper}>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.text_box}>
          <p>{text}</p>
        </motion.div>
      </div>
    </>
  )
}
