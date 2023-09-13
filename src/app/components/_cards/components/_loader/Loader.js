import styles from './Loader.module.css';
import Link from 'next/link';

export default function Loader(props) {
  return (
    <div className={styles.loader}>
      <div>
        <Link className={styles.link} href={'#'}>{props.linkText}</Link>
      </div>
      <div>
        <button
          className={styles.btn}
          onClick={props.onClick}>{props.btnText}</button>
      </div>
    </div>
  )
}
