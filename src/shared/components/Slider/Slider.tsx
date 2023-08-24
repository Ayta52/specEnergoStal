import React, { useState } from 'react';
import photo from '../../../img/main2.jpg';
import photoMain from '../../../img/main_img.png';
import styles from './slider.css';

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
          <img src={photoMain} alt="photo" />
        </div>
        <div className={styles.sliderElement} data-state={2}>
          <img src={photo} alt="photo" />
        </div>
        <div className={styles.sliderElement} data-state={3}>
          <img src={photoMain} alt="photo" />
        </div>
        <div className={styles.sliderElement} data-state={4}>
          <img src={photo} alt="photo" />
        </div>
        <div className={styles.sliderElement} data-state={5}>
          <img src={photoMain} alt="photo" />
        </div>
      </div>
    </div>
  );
}
