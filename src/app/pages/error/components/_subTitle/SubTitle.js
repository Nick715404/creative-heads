import React from 'react';
import styles from './SubTitle.module.css';

export default function SubTitle({ text }) {
  return (
    <div className={styles.subtitle}>
      <span className={styles.error__subtitle}>{text}</span>
    </div>
  )
}
