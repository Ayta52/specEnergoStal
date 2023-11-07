// import React from 'react';
import classNames from 'classnames';
import CertificateTitle from '../CertificateTitle/CertificateTitle';
import transneft from '../../../../icons/transneft.svg';
import rosatom from '../../../../icons/rosatom.svg';
import tatneft from '../../../../icons/tatneft.svg';
import novatek from '../../../../icons/novatek.svg';
import mosenergo from '../../../../icons/mosenergo.svg';
import arctickgaz from '../../../../icons/arctickgaz.svg';
import mondi from '../../../../icons/mondi.svg';
import rusneft from '../../../../icons/russNeft.svg';
import group from '../../../../icons/group.svg';
import nornikel from '../../../../icons/nornickel.svg';
import rusal from '../../../../icons/rusal.svg';
import gazprom from '../../../../icons/gazprom.svg';
import lukoil from '../../../../icons/lukoil.svg';
import sibur from '../../../../icons/sibur.svg';
import rosneft from '../../../../icons/rosneft.svg';
import styles from './ticker.module.css';

export function Ticker() {
  return (
    <div className={styles.container}>
      <div className={styles.tickerTitle}>
        <h2 className={styles.tickerTitleText}>
          Наши партнеры
        </h2>
      </div>
      <div className={styles.tickerContainer}>
        <span className={styles.ticker}>
          <img className={classNames(styles.gazprom, styles.ticekImg)} src={gazprom} alt="gazprom" />
          <img className={classNames(styles.sibur, styles.ticekImg)} src={sibur} alt="sibur" />
          <img className={classNames(styles.rosneft, styles.ticekImg)} src={rosneft} alt="rosneft" />
          <img className={classNames(styles.lukoil, styles.ticekImg)} src={lukoil} alt="lukoil" />
          <img className={classNames(styles.tatneft, styles.tickerImg)} src={tatneft} alt="tatneft" />
          <img className={classNames(styles.novatek, styles.tickerImg)} src={novatek} alt="novatek" />
          <img className={classNames(styles.rosatom, styles.tickerImg)} src={rosatom} alt="rosatom" />
          <img className={classNames(styles.transneft, styles.tickerImg)} src={transneft} alt="transneft" />
          <img className={classNames(styles.mosenergo, styles.tickerImg)} src={mosenergo} alt="mosenergo" />
          <img className={classNames(styles.rusneft, styles.tickerImg)} src={rusneft} alt="rusneft" />
          <img className={classNames(styles.group, styles.tickerImg)} src={group} alt="group" />
          <img className={classNames(styles.nornikel, styles.tickerImg)} src={nornikel} alt="nornikel" />
          <img className={classNames(styles.mondi, styles.tickerImg)} src={mondi} alt="mondi" />
          <img className={classNames(styles.arctickgaz, styles.tickerImg)} src={arctickgaz} alt="arctickgaz" />
          <img className={classNames(styles.rusal, styles.tickerImg)} src={rusal} alt="rusal" />
        </span>
      </div>

      <CertificateTitle />
    </div>
  );
}
