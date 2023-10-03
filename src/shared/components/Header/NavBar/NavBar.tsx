// import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './navbar.module.css';

export function NavBar() {
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <Link to="/" className={styles.navLink}>
              Главная
            </Link>
            <div className={styles.underLine} />
          </li>
          <li className={styles.listItem}>
            <Link to="/productlist" className={styles.navLink}>
              Продукция
            </Link>
            <div className={styles.underLine} />
          </li>
          <li className={styles.listItem}>
            <Link to="/certificatelist" className={styles.navLink}>
              Сертификаты
            </Link>
            <div className={styles.underLine} />
          </li>
          <li className={styles.listItem}>
            <Link to="/contact" className={styles.navLink}>
              Контакты
            </Link>
            <div className={styles.underLine} />
          </li>
        </ul>
      </div>
      {/* <Outlet /> */}
    </>
  );
}
