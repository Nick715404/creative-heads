import styles from './Footer.module.css';

import Socials from '../_socials/Socials';
import Info from '../_info/Info';
import Explore from '../_explore/Explore';
import Border from './components/_border/Border';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__content}>
            <div className={styles.footer__info}>
              <Info place={'New York, USA'} email={'hi@creative-heads.com'} address={'LLC2 Gold Street, Second Floor, NY, NY, 10038'} />
            </div>
            <div className={styles.footer__lists}>
              <div className={styles.footer__explore}>
                <Explore />
              </div>
              <div className={styles.footer__socials}>
                <Socials />
              </div>
            </div>
          </div>
          <div className={styles.footer__border_box}>
            <Border date={'2023'} title={'Made by Creative Heads'} />
          </div>
        </div>
      </div>
    </footer>
  )
}
