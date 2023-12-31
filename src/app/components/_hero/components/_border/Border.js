import styles from './Border.module.css';

import LeftCurve from 'public/img/border/left-curve.svg';
import RightCurve from 'public/img/border/right-curve.svg';

export default function Border({date, text}) {
  return (
    <div className={styles.border}>
      <LeftCurve className={styles.left_curve} />
      <div className={styles.text}>
        <span>{date}</span>
      </div>
      <div className={styles.text}>
        <span>{text}</span>
      </div>
      <RightCurve className={styles.rigth_curve} />
    </div>
  )
}
