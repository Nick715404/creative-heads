'use client'

import styles from './Info.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

export default function Info({ place, email, address }) {
  return (
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0.2 }}
      className={styles.info}>
      <div className={styles.info__place_box}>
        <span>{place}</span>
      </div>
      <div className={styles.info__email_box}>
        <Link className={styles.info__text} href={'#'}>{email}</Link>
      </div>
      <div className={styles.info__address_box}>
        <address className={styles.info__text}>{address}</address>
      </div>
    </motion.div>
  )
}
