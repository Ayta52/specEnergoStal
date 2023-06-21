import React from 'react';
import styles from './navbar.css';

export function NavBar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <span>Главная</span>
          <span className={styles.underLine}></span>
        </li>
        <li className={styles.listItem}>
          <span>Продукция</span>
          <span className={styles.underLine}></span>
        </li>
        <li className={styles.listItem}>
          <span>Сертификаты</span>
          <span className={styles.underLine}></span>
        </li>
        <li className={styles.listItem}>
          <span>Контакты</span>
          <span className={styles.underLine}></span>
        </li>
      </ul>
    </div>
  );
}
