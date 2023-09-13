import React from 'react';
import styles from './ProcessItem.module.css';

import ArrowBtn from './_component/_arrowBtn/ArrowBtn';

export default function ProcessItem({ number, title, tag1, tag2, tag3, tag4, text }) {
  return (
    <div className={styles.item}>
      {/*item__content*/}
      <div className={styles.item__content}>
        {/*item__title*/}
        <div className={styles.item__title_box}>
          <div className={styles.item__number_box}>
            <span className={styles.item__number}>{number}</span>
          </div>
          <div className={styles.item__title_box}>
            <h4 className={styles.item__title}>{title}</h4>
          </div>
        </div>
        {/*item__tags*/}
        <div className={styles.tags_box}>
          <span id='onHoverGradient' className={styles.tag}>{tag1}</span>
          <span id='onHoverGradient' className={styles.tag}>{tag2}</span>
          <span id='onHoverGradient' className={styles.tag}>{tag3}</span>
          <span id='onHoverGradient' className={styles.tag}>{tag4}</span>
        </div>
      </div>
      {/*item__info*/}
      <div className={styles.item__info}>
        <div className={styles.item__text_box}>
          <p className={styles.item__text}>
            {text}
          </p>
        </div>
        <div className={styles.item__btn_box}>
          <ArrowBtn />
        </div>
      </div>
    </div>
  )
}
