'use client'

import styles from './Process.module.css';
import { discussText, mappingText, executionText } from '@/app/data';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/transitionVariant';

import ProcessItem from '../_processItem/ProcessItem';

export default function Process() {

  return (
    <section id='process' className={styles.process}>
      <div className="container">
        <div className={styles.process__wrapper}>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.process__title_box}>
            <h2 className={styles.process__title}>Our Process</h2>
          </motion.div>
          <div className={styles.process__content}>
            <div className={styles.process__items}>
              <motion.div
                variants={fadeIn('left', 0.6)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.2 }}
                className={styles.process__item_motion}>
                <ProcessItem
                  number={'01.'}
                  title={'Discuss'}
                  tag1={'product observation'}
                  tag2={'define a problem'}
                  tag3={'competitive analysis'}
                  tag4={'brainstorming'}
                  text={discussText}
                />
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.8)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.2 }}
                className={styles.process__item_motion}>
                <ProcessItem
                  number={'02.'}
                  title={'Mapping'}
                  tag1={'define strategy'}
                  tag2={'ideate the solution'}
                  tag3={'define project requirements'}
                  tag4={'wireframing'}
                  text={mappingText}
                />
              </motion.div>
              <motion.div
                variants={fadeIn('left', 1)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.2 }}
                className={styles.process__item_motion}>
                <ProcessItem
                  number={'03.'}
                  title={'Execution'}
                  tag1={'creative process'}
                  tag2={'prototyping'}
                  tag3={'testing'}
                  tag4={'development'}
                  text={executionText}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
