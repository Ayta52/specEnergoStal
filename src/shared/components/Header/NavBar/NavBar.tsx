import React from 'react';
import styles from './navbar.css';

export function NavBar() {
  return (
      <div className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <a href="#" className={styles.navLink}>
              Главная
            </a>
            <div className={styles.underLine} />
          </li>
          <li className={styles.listItem}>
            <a href="#" className={styles.navLink}>
              Продукция
            </a>
            <div className={styles.underLine} />
          </li>
          <li className={styles.listItem}>
            <a href='#' className={styles.navLink}>
              Сертификаты
            </a>
            <div className={styles.underLine} />
          </li>
          <li className={styles.listItem}>
            <a href="#" className={styles.navLink}>
              Контакты
            </a>
            <div className={styles.underLine} />
          </li>
        </ul>
      </div>
  );
}
