import styles from './Tags.module.css';

export default function Tag({ tag }) {
  return (
    <div id='onHoverGradient' className={styles.tag}>
      <p>{tag.title}</p>
    </div>
  )
}
