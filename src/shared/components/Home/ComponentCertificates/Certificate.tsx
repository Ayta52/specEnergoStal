// import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import allCertificate from '../../../../icons/allCertificate.svg';
import DC from '../../../../img/certificates/DC.png';
import ISO from '../../../../img/certificates/ISO.png';
import TCTP1 from '../../../../img/certificates/TCTP1.png';
import TCTP2 from '../../../../img/certificates/TCTP2.png';
import styles from './certificate.module.css';
import generateRandomIndex from '../../../../utils/js/generateRandomIndex';

const imgList = [
  {
    id: 1,
    content: <img key={generateRandomIndex()} src={DC} alt="sert" />,
  },
  {
    id: 2,
    content: <img key={generateRandomIndex()} src={ISO} alt="sert" />,
  },
  {
    id: 3,
    content: <img key={generateRandomIndex()} src={TCTP1} alt="sert" />,
  },
  {
    id: 4,
    content: <img key={generateRandomIndex()} src={TCTP2} alt="sert" />,
  },
  {
    id: 5,
    content: <img key={generateRandomIndex()} src={DC} alt="sert" />,
  },
  {
    id: 6,
    content: <img key={generateRandomIndex()} src={ISO} alt="sert" />,
  },
  {
    id: 7,
    content: <img key={generateRandomIndex()} src={TCTP1} alt="sert" />,
  },
  {
    id: 8,
    content: <img key={generateRandomIndex()} src={TCTP2} alt="sert" />,
  }
];
const shuffledPhotos = [...imgList].sort(() => Math.random() - 0.5);


export function Certificate() {
  return (
    <div className={styles.certificate}>
      <div className={styles.certificateSlider}>
        <div className={styles.certificateSliderElements}>
          <span className={styles.tikerCertificate}>
            {shuffledPhotos.map((item) => (
              <Link to={'/certificatelist'} key={item.id} className={styles.certificateSliderElement}>
                {item.content}
              </Link>
            ))}
          </span>
        </div>
      </div>

      <div className={styles.certificateButton}>
        <Link to={'/certificatelist'} className={styles.certificateButtonLink}>
          смотреть все
        </Link>

        <img src={allCertificate} alt="allCertificate" />
      </div>
    </div>
  );
}
