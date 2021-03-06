import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export function AuthNav() {
  return (
    <div className="">
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to="signup"
      >
        Sign Up
      </NavLink>
      <NavLink
        to="login"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Login
      </NavLink>
    </div>
  );
}
