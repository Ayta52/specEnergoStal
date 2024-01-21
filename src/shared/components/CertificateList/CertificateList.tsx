import { useState, useEffect } from 'react';
import { SertificatePopup } from './SertificatePopup/SertificatePopup';
import { useResize } from '../common/UseResize';
import DC from '../../../img/certificates/DC.png';
import ISO from '../../../img/certificates/ISO.png';
import TCTP1 from '../../../img/certificates/TCTP1.png';
import TCTP2 from '../../../img/certificates/TCTP2.png';
import styles from './certificateList.module.css';

const certificateListMass: string[] = [
  DC,
  ISO
];
const certificateListMassTwo: string[] = [
  TCTP1,
  TCTP2
];
const certificateListMassLine: string[] = [
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
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
  const renderCertificateListTwo = () => {
    return certificateListMassTwo.map((item, index) => (
      <img
        key={index}
        src={item}
        alt="certificate"
        onClick={() => openCertificatePopup(item)}
        className={styles.certificate_image}
      />
    ));
  };
  const renderCertificateListLine = () => {
    return certificateListMassLine.map((item, index) => (
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
          <h1 className={styles.certificate_list_title}>Сертификаты</h1>
          <p className={styles.certificate_list_description}>
            Раздел содержит информацию о сертификации и соответствии продукции
            международным и национальным стандартам качества, таким как{' '}
            <span className={styles.certificate_list_description_span}>ISO 9001, API, ASME, DIN</span> и другим. Компания может
            предоставить сертификаты на свои изделия и комплектующие для
            доказательства их соответствия требованиям заказчиков и рынка в
            целом.
          </p>
        </div>

        <div className={styles.certificate_img_block_one}>
          {renderCertificateList()}
          
        </div>

        <div className={styles.certificate_img_block_two}>
          {renderCertificateListTwo()}
        </div>

        <div className={styles.certificate_img_block_line}>
          {renderCertificateListLine()}
        </div>
        
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
