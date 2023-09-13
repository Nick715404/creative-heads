'use client'

import styles from './Button.module.css';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';
import Link from 'next/link';
import { btnLink } from '@/app/data';

export default function Button({ children }) {

  const headerBtnStyles = {
    display: "block",
    fontFamily: 'Clash Grotesk',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '106%',
    textTransform: 'uppercase',
    padding: '15px 25px',
    textAlign: 'center',
    borderRadius: '51px',
    border: '1px solid var(--dark)',
    // cursor: 'pointer',
    background: 'transparent',
    textDecoration: 'none',
  };

  const href = 'https://t.me/ptrworship';

  return (
    <motion.div
      variants={fadeIn('left', 0.0)}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link
        className={styles.btn}
        href={btnLink}
        id='onHoverGradient'
        style={headerBtnStyles}
        target='_blank'
        >
        {children}
      </Link>
    </motion.div>
  )
}

