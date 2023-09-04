'use client'

import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

import { tags } from '@/app/data';
import Tag from '../_tags/Tag';

export default function Services({ title }) {
  return (
    <div className={styles.services}>
      <motion.div
        variants={fadeIn('up', 0.8)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 0.2 }}
        className={styles.services__wrapper}>
        <div className={styles.services__title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.tags}>
          {tags.map(tag => (
            <Tag
              key={tag.id}
              tag={tag}
            />
          ))}
        </div>
        <div className={styles.wrapper__curve_left}></div>
        <div className={styles.wrapper__curve_right}></div>
      </motion.div>
    </div>
  )
}
