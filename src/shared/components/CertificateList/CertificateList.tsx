import { useState } from 'react';
import certificate1 from '../../../img/certificates/1.jpg';
import certificate2 from '../../../img/certificates/2.jpg';
import DC from '../../../img/certificates/DC.jpg';
import ISO from '../../../img/certificates/ISO.jpg';
import TCTP1 from '../../../img/certificates/TCTP1.jpg';
import TCTP2 from '../../../img/certificates/TCTP2.jpg';
import styles from './certificateList.module.css';
import { SertificatePopup } from './SertificatePopup/SertificatePopup';

const certificateListMass: string[] = [
  certificate1,
  certificate2,
  DC,
  ISO,
  TCTP1,
  TCTP2,
];

export function CertificateList() {
  const [certificatePopupOpen, setCertificatePopupOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState('');
  const openCertificatePopup = (certificate: string) => {
    setSelectedCertificate(certificate);
    setCertificatePopupOpen(true);
  };
  const closeCertificatePopup = () => {
    setCertificatePopupOpen(false);
    setSelectedCertificate('');
  };
  const renderCertificateList = () => {
    return certificateListMass.map((item, index) => (
      <img
        key={index}
        src={item}
        alt="certificate"
        onClick={() => openCertificatePopup(item)}
        className={styles.certificate_image}
      />
    ));
  };
  return (
    <div className={styles.container}>
      <div className={styles.certificate_list_upBlock}>
        <div className={styles.certificate_list_text}>
          <h1>Сертификаты</h1>
          <p>
            Раздел содержит информацию о сертификации и соответствии продукции
            международным и национальным стандартам качества, таким как{' '}
            <span>ISO 9001, API, ASME, DIN</span> и другим. Компания может
            предоставить сертификаты на свои изделия и комплектующие для
            доказательства их соответствия требованиям заказчиков и рынка в
            целом.
          </p>
        </div>
        {renderCertificateList()}
      </div>
      {certificatePopupOpen && (
        <SertificatePopup
          certificate={selectedCertificate}
          onClose={closeCertificatePopup}
        />
      )}
    </div>
  );
}
