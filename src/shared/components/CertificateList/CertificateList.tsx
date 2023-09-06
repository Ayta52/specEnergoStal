import React from "react";
import certificate1 from '../../../img/certificates/1.jpg';
import certificate2 from '../../../img/certificates/2.jpg';
import styles from "./certificateList.css";

export function CertificateList() {
  return (
    <div className={styles.container}>
      <div className={styles.certificate_list_upBlock}>
        <div className={styles.certificate_list_text}>
          <h1>сертификаты</h1>
          <p>
            Раздел содержит информацию о сертификации и соответствии продукции
            международным и национальным стандартам качества, таким как{" "}
            <span>ISO 9001, API, ASME, DIN</span> и другим. Компания может
            предоставить сертификаты на свои изделия и комплектующие для
            доказательства их соответствия требованиям заказчиков и рынка в
            целом.
          </p>
        </div>

        <div className={styles.certificate_list_upBlock_img}>
          <img src={certificate1} alt="certificate" />
          <img src={certificate2} alt="certificate" />
        </div>
      </div>

      <div className={styles.certificate_list_centerBlock}>
        <img src={certificate1} alt="certificate" />
        <img src={certificate2} alt="certificate" />
        <img src={certificate1} alt="certificate" />
        <img src={certificate2} alt="certificate" />
      </div>

      <div className={styles.certificate_list_downBlock}>
        <img src={certificate1} alt="certificate" />
        <img src={certificate2} alt="certificate" />
        <img src={certificate1} alt="certificate" />
        <img src={certificate2} alt="certificate" />
      </div>

    </div>
  );
}
