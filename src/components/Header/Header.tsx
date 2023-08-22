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
            ToDo
          </NavLink>
          <NavLink to="/list" className={getActiveClass}>
            List
          </NavLink>
        </div>
      </header>
    </>
  );
};
