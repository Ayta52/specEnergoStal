// import React from 'react';
import gazprom from '../../../../icons/gazprom.svg';
import lukoil from '../../../../icons/lukoil.svg';
import sibur from '../../../../icons/sibur.svg';
import rosneft from '../../../../icons/rosneft.svg';
import tatneft from '../../../../icons/tatneft.svg';
import novatek from '../../../../icons/novatek.svg';
import rosatom from '../../../../icons/rosatom.svg';
import transneft from '../../../../icons/transneft.svg';
import mosenergo from '../../../../icons/mosenergo.svg';
import rusneft from '../../../../icons/russNeft.svg';
import group from '../../../../icons/group.svg';
import nornikel from '../../../../icons/nornickel.svg';
import mondi from '../../../../icons/mondi.svg';
import arctickgaz from '../../../../icons/arctickgaz.svg';
import rusal from '../../../../icons/rusal.svg';
import styles from './ticker.module.css';

export function Ticker() {
  return (
    <div className={styles.container}>
      <div className={styles.tickerContainer}>
        <span className={styles.ticker}>
          <img className={styles.gazprom} src={gazprom} alt="gazprom" />
          <img className={styles.tatneft} src={tatneft} alt="tatneft" />
          <img className={styles.novatek} src={novatek} alt="novatek" />
          <img className={styles.sibur} src={sibur} alt="sibur" />
          <img className={styles.rosatom} src={rosatom} alt="rosatom" />
          <img className={styles.transneft} src={transneft} alt="transneft" />
          <img className={styles.rosneft} src={rosneft} alt="rosneft" />
          <img className={styles.mosenergo} src={mosenergo} alt="mosenergo" />
          <img className={styles.rusneft} src={rusneft} alt="rusneft" />
          <img className={styles.group} src={group} alt="group" />
          <img className={styles.lukoil} src={lukoil} alt="lukoil" />
          <img className={styles.nornikel} src={nornikel} alt="nornikel" />
          <img className={styles.mondi} src={mondi} alt="mondi" />
          <img className={styles.arctickgaz} src={arctickgaz} alt="arctickgaz" />
          <img className={styles.rusal} src={rusal} alt="rusal" />
        </span>
      </div>
    </div>
  );
}
