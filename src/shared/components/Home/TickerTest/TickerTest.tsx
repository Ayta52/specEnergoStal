import React from 'react';
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
import classNames from 'classnames';
import styles from './tickerTest.module.css';

const images = [
  transneft, rosatom, tatneft, novatek,
  mosenergo, arctickgaz, mondi, rusneft,
  group, nornikel, rusal, gazprom,
  lukoil, sibur, rosneft
];

export const TickerTest = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tickerContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            className={classNames(styles.tickerImg, styles.ticker)}
            src={image}
            alt={`ticker-img-${index}`}
          />
        ))}
      </div>
    </div>
  );
};