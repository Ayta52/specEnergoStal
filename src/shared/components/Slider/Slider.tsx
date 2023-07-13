import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './slider.css';
import photo from '../../../img/1.jpg';

interface ISLiderProps {
  autoPlay: boolean;
  autoPlayTime: number;
  width: '%' | 'px';
  height: '%' | 'px';
}

export function Slider() {
  const [state, setState] = useState(1);
  const isSliderOn = () => {
    // const currentImg
  };

  // isSliderOn();

  return (
    <div className={styles.slider}>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderElement} data-state={1}>
          <img src={photo} alt="" />
        </div>
        <div className={styles.sliderElement} data-state={2}>
          <img src={photo} alt="" />
        </div>
        <div className={styles.sliderElement} data-state={3}>
          <img src={photo} alt="" />
        </div>
        <div className={styles.sliderElement} data-state={4}>
          <img src={photo} alt="" />
        </div>
        <div className={styles.sliderElement} data-state={5}>
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
}
