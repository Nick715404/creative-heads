'use client'

import React from 'react';
import styles from './page.module.css';
import { fadeIn } from '@/app/transitionVariant';
import { motion } from 'framer-motion';

import Title from './components/_title/Title';
import SubTitle from './components/_subTitle/SubTitle';
import Text from './components/_text/Text';
import BackBtn from './components/_backButton/BackBtn';


export default function page() {
  return (
    <div className={styles.error}>
      <div className={styles.error__wrapper}>
        <div className={styles.error__text_box}>
          <motion.div
            className={styles.motion_title}
            variants={fadeIn('down', 0.1)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Title title={'Oopsy doopsy'} />
          </motion.div>
          <motion.div
            className={styles.motion_subtitle}
            variants={fadeIn('up', 0.3)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <SubTitle text={'Page still in progress!'} />
          </motion.div>
          <motion.div
            className={styles.motion_text}
            variants={fadeIn('up', 0.6)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Text text={"Don't be sad! Just relax and wait a little bit :)"} />
          </motion.div>
        </div>
        <motion.div
          className={styles.error__btn_box}
          variants={fadeIn('up', 0.9)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <BackBtn text={'back to home'} />
        </motion.div>
      </div>
    </div>
  )
}
