'use client'

import React from 'react';
import styles from './ArrowBtn.module.css';

export default function ArrowBtn({ src }) {
  const whiteArrowPath = '/img/process/white-arrow.svg';
  const blackArrowPath = '/img/process/black-arrow.svg';

  return (
    <>
      <button id='onHoverGradient' className={styles.btn}>
        <div className={styles.img}></div>
      </button>
    </>
  )
}
