import React, { useState } from 'react';
import certificate1 from '../../../img/certificates/1.jpg';
import certificate2 from '../../../img/certificates/2.jpg';
import styles from './certificateList.module.css';

// ТУТ ОШИБКА ПРИ ДОБАВЛЕНИИ ХУКА useState, НУЖНО ЕЁ РЕШИТЬ ДЛЯ ДОБАВЛЕНИЯ ПОПАППА

const certificateListMass = [certificate1, certificate2];
// const [popup, setPopup] = useState(false);
// const certficateActive = (e:any) => {
//   console.log(e.target);
//   setPopup(!popup);
// };

export function CertificateList() {
  return (
    <div className={styles.container}>
      <div className={styles.certificate_list_upBlock}>
        <div className={styles.certificate_list_text}>
          <h1>сертификаты</h1>
          <p>
            Раздел содержит информацию о сертификации и соответствии продукции
            международным и национальным стандартам качества, таким как{' '}
            <span>ISO 9001, API, ASME, DIN</span> и другим. Компания может
            предоставить сертификаты на свои изделия и комплектующие для
            доказательства их соответствия требованиям заказчиков и рынка в
            целом.
          </p>
        </div>

        <div className={styles.certificate_list_upBlock_img}>
          {certificateListMass.map((item, index) => {
            return <img key={index} src={item} alt="certificate" />;
          })}
        </div>
      </div>

      <div className={styles.certificate_list_centerBlock}>
        {certificateListMass.map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              className={styles.certificate_list_img}
              alt="certificate"
            />
          );
        })}
        {certificateListMass.map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              className={styles.certificate_list_img}
              alt="certificate"
            />
          );
        })}
      </div>

      <div className={styles.certificate_list_downBlock}>
        {certificateListMass.map((item, index) => {
          return <img key={index} src={item} alt="certificate" />;
        })}
        {certificateListMass.map((item, index) => {
          return <img key={index} src={item} alt="certificate" />;
        })}
      </div>
    </div>
  );
}
