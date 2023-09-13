import styles from './Button.module.css';
import Link from 'next/link';
import { btnLink } from '@/app/data';

import Arrow from 'public/img/cursor.svg';

export default function Button({ children }) {
  return (
    <div className={styles.btn_box}>
      <Link 
      className={styles.collab__btn}
      href={btnLink}
      target='_blank'
      >
        {children}
        <Arrow className={styles.collab__arrow} />
      </Link>
    </div>
  )
}
