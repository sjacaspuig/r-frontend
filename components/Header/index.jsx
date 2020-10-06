import Link from 'next/link';
import { useRouter } from "next/router";

import { useAppContext } from '../../contexts/AppContext';
import Cross from '../../public/cross.svg';
import Menu from '../../public/menu.svg';
import Logo from '../../public/logo.svg';
import styles from './Header.module.scss';

const Header = () => {
  const { menu, toggleContactModal, toggleMenu } = useAppContext();
  const router = useRouter();

  return (
    <header className={`container ${styles.header}`}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav className={`${styles.nav} ${menu ? styles.active : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.linkItem}>
            <Link href="/">
              <a className={`${styles.link} ${router.pathname == "/" ? styles.active : ""}`}>Home</a>
            </Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="/portfolio">
              <a className={`${styles.link} ${router.pathname == "/portfolio" ? styles.active : ""}`}>Portfolio</a>
            </Link>
          </li>
          <li className={styles.linkItem}>
            <a className={styles.link} onClick={toggleContactModal}>Contáctame</a>
          </li>
        </ul>
      </nav>
      <div className={styles.trigger}>
        {menu && <Cross className={styles.cross} onClick={toggleMenu}/>}
        {!menu && <Menu className={styles.menu} onClick={toggleMenu}/>}
      </div>
    </header>
  );
};

export default Header;
