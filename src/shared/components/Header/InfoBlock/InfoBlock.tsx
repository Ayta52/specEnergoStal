import React from 'react';
import styles from './infoblock.css';

export function InfoBlock() {
  return (
    <div className={styles.infoBlock}>
      <a href="mailto:senergostal.ru" className={styles.links}>
        info@senergostal.ru
      </a>
      <a href="tel:+78312100108" className={styles.links}>
        +7 831 210 01 08
      </a>
    </div>
  );
}
