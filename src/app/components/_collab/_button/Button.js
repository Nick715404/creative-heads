import React from 'react';
import styles from './Button.module.css';

import Arrow from 'public/img/cursor.svg';

export default function Button({ children }) {
  return (
    <>
      <button className={styles.collab__btn}>
        {children}
        <Arrow className={styles.collab__arrow} />
      </button>
    </>
  )
}
