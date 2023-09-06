import React from 'react';
import styles from './Title.module.css';

export default function Title({title}) {
  return (
    <div className={styles.title}>
      <h1 className={styles.error__title}>{title}</h1>
    </div>
  )
}
