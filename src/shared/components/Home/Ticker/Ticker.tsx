import React from 'react';
import gazprom from '../../../../icons/gazprom.svg';
import lukoil from '../../../../icons/lukoil.svg';
import sibur from '../../../../icons/sibur.svg';
import rosneft from '../../../../icons/rosneft.svg';
import styles from './ticker.css';

export function Ticker() {
  return (
    <div className={styles.container}>
      <div className={styles.tickerContainer}>
        <span className={styles.ticker}>
          <img className={styles.gazprom} src={gazprom} alt="gazprom" />
          <img className={styles.lukoil} src={lukoil} alt="lukoil" />
          <img className={styles.sibur} src={sibur} alt="sibur" />
          <img className={styles.rosneft} src={rosneft} alt="rosneft" />
        </span>
        <span className={styles.ticker}>
          <img className={styles.gazprom} src={gazprom} alt="gazprom" />
          <img className={styles.lukoil} src={lukoil} alt="lukoil" />
          <img className={styles.sibur} src={sibur} alt="sibur" />
          <img className={styles.rosneft} src={rosneft} alt="rosneft" />
        </span>
      </div>
    </div>
  );
}
