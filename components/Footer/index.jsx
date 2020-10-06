import Link from 'next/link';

import Logo from '../../public/logo.svg';
import Behance from '../../public/behance.svg';
import Twitter from '../../public/twitter.svg';
import Linkedin from '../../public/linkedin.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`container ${styles.footer}`}>
      <Link href="/">
        <a className={styles.linkLogo}>
          <Logo className={styles.logo} />
        </a>
      </Link>
      <nav>
        <ul>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/portfolio">
              <a className={styles.link}>Portfolio</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">
              <a className={styles.link}>Contáctame</a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Behance />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Linkedin />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
