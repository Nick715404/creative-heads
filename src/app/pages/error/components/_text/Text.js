import React from 'react';
import styles from './Text.module.css';

export default function Text({text}) {
  return (
    <div className={styles.text}>
      <p className={styles.error__text}>{text}</p>
    </div>
  )
}
