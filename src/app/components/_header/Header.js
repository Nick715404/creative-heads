'use client'

import styles from './Header.module.css';

import Logo from '../_logo/Logo';
import Navbar from '../_navbar/Navbar';
import Button from '../_btn/Button';
import MobileNav from '../_mobileNav/MobileNav';

export default function Header() {

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.haeder__logo_box}>
            <Logo />
          </div>
          <div className={styles.header__content}>
            <div className={styles.header__navbar_box}>
              <Navbar />
            </div>
            <div className={styles.header__btn_box}>
              <Button>Let's talk</Button>
            </div>
          </div>
          <div className={styles.header__mobile}>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
