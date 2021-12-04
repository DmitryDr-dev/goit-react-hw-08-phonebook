import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        // activeClassName={styles.activeLink}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        // activeClassName={styles.activeLink}
        to="/contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
}
