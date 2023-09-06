'use client'

import styles from './Cards.module.css';
import Link from 'next/link';

import {  useState } from 'react';
import { cards } from '@/app/data';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

import Card from './components/_card/Card';
import Loader from './components/_loader/Loader';

export default function Cards() {

  const [empty, setEmpty] = useState(6);

  const loadMore = () => {
    setEmpty(empty + empty);
  };

  const sliceCards = cards.slice(0, empty);

  return (
    <div className={styles.cards}>
      <div className={styles.cards__wrapper}>
        {sliceCards.map(card => (
            <Card key={card.id} card={card} />
        ))}
      </div>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 0.4 }}
        className={styles.border_box}>
        <Loader onClick={loadMore} linkText={'all works'} btnText={'see more'} />
      </motion.div>
    </div>
  );
};
