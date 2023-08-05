import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <NavLink to="/" className={getActiveClass}>
            Home
          </NavLink>
          <NavLink to="/todo" className={getActiveClass}>
            ToDo
          </NavLink>
        </div>
      </header>
    </>
  );
};
