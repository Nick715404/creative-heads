import React from 'react';
import styles from './BackBtn.module.css';
import Link from 'next/link';

export default function BackBtn({ text }) {
  return (
    <div className={styles.back_btn}>
      <Link className={styles.error__back_btn} href={'/'}>
        {text}
      </Link>
    </div>
  )
}
