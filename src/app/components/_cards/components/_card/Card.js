'use client'

import styles from './Card.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cardFadeIn } from '@/app/transitionVariant';

export default function Card({ card }) {

  return (
    <motion.div
      variants={cardFadeIn('up', 0)}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0 }}
      className={styles.cards__item}>
      <div className={styles.cards__img}
        style={
          {
            backgroundImage: `url(${card.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }
        }>
        <div className={styles.cards__btn}>
          <div className={styles.btn}>
            <Link className={styles.btn_link} href={card.projectPage}></Link>
          </div>
        </div>
        <div id='onHoverGradient' className={styles.cards__tag}>
          {card.tag}
        </div>
      </div>
      <div className={styles.cards__link_box}>
        <Link className={styles.link} href={card.link} target="_blank">
          {card.title}
        </Link>
      </div>
      <div className={styles.cards__text}>
        <p>{card.text}</p>
      </div>
    </motion.div>
  )
}
