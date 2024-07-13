import styles from '../global.module.css';
import Datasheet from './datasheet';

export default function Page() {
  return (
  <>
    <h1 className={styles.title_texts}>Database</h1>
    <Datasheet />
  </>
  );
}
