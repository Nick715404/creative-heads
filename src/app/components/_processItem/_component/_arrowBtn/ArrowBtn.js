'use client'

import styles from './ArrowBtn.module.css';
import { btnLink } from '@/app/data';
import Link from 'next/link';


export default function ArrowBtn() {
  return (
    <>
      <Link
        className={styles.btn}
        id='onHoverGradient'
        href={btnLink}
        target='_blank'
      >
        <div className={styles.img}></div>
      </Link>
    </>
  )
}
