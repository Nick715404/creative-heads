'use client'

import styles from './Collab.module.css';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

import Button from './_button/Button';
import Text from './_text/Text';
import Services from '../_services/Services';

export default function Collab() {
  return (
    <section className={styles.collab}>
      <div className="container">
        <div className={styles.collab__wrapper}>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.collab__btn_box}>
            <Button>Let's talk</Button>
          </motion.div>
          <div className={styles.collab__text_box}>
            <Text />
          </div>
          <div className={styles.collab__services_box}>
            <Services title={'services'} />
          </div>
        </div>
      </div>
    </section>
  )
}
