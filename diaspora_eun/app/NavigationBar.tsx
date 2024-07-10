// NavigationBar.tsx
import Link from 'next/link';
import styles from './NavigationBar.module.css'; // Assuming you have a CSS module for styling

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/blurbs" className={styles.navLink}>
            Blurbs
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/database" className={styles.navLink}>
            Database
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/article" className={styles.navLink}>
            Article
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
