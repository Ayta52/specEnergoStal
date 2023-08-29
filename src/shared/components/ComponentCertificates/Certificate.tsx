import React from 'react';
import prevArrow from '../../../icons/leftArrow.svg';
import nextArrow from '../../../icons/rightArrow.svg';
import certificate1 from '../../../img/certificates/1.jpg';
import certificate2 from '../../../img/certificates/2.jpg';
import styles from './certificate.css';

const imgList = [
  <img key={certificate1} src={certificate1} />,
  <img key={certificate2} src={certificate2} />,
  <img key={certificate1} src={certificate1} />,
  <img key={certificate2} src={certificate2} />,
  <img key={certificate1} src={certificate1} />,
  <img key={certificate2} src={certificate2} />,
  <img key={certificate1} src={certificate1} />,
  <img key={certificate2} src={certificate2} />,
  <img key={certificate1} src={certificate1} />,
  <img key={certificate2} src={certificate2} />,
  <img key={certificate1} src={certificate1} />,
  <img key={certificate2} src={certificate2} />,
];

export function Certificate() {
  const [wobble , setWobble] = React.useState(0);
  
  return (
    <div className={styles.certificate}>
      <div className={styles.certificateTitle}>
        <h2>СЕРТИФИКАТЫ</h2>
        <div className={styles.certificateTitleDescription}>
          Основным направлением компании является{" "}
          <span className={styles.descriptionBlue}>
            производство и комплектация трубопроводных систем
          </span>{" "}
          для газовой, нефтяной, атомной и нефтехимической промышленности
        </div>
      </div>

      <div className={styles.certificateSlider}>
        <div className={styles.certificateSliderPrevArrow}>
          <img src={prevArrow} alt="prev" />
        </div>

        <div className={styles.certificateSliderContainer}>
          <span className={styles.tikerCertificate}>
            {imgList.map((item, index) => (
              <div key={index} className={styles.certificateSliderElement}>
                {item}
              </div>
            ))}
          </span>

          <span className={styles.tikerCertificate}>
            {imgList.map((item, index) => (
              <div key={index} className={styles.certificateSliderElement}>
                {item}
              </div>
            ))}
          </span>
        </div>

        <div className={styles.certificateSliderNextArrow}>
          <img src={nextArrow} alt="next" />
        </div>
      </div>
    </div>
  );
}
