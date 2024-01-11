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
  ISO,
  TCTP1,
  TCTP2,
];

export function CertificateList() {

  const {
    isScreenXlCertificateList,
    isScreenLgCertificateList
  } = useResize();

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
  return (
    // Это работает!!
    // <div className={styles.container}>
    //   <div className={styles.certificate_list_upBlock}>
    //     <div className={styles.certificate_list_text}>
    //       <h1>Сертификаты</h1>
    //       <p>
    //         Раздел содержит информацию о сертификации и соответствии продукции
    //         международным и национальным стандартам качества, таким как{' '}
    //         <span>ISO 9001, API, ASME, DIN</span> и другим. Компания может
    //         предоставить сертификаты на свои изделия и комплектующие для
    //         доказательства их соответствия требованиям заказчиков и рынка в
    //         целом.
    //       </p>
    //     </div>
    //     {renderCertificateList()}
    //   </div>

    //   {certificatePopupOpen && (
    //     <SertificatePopup
    //       certificate={selectedCertificate}
    //       onClose={closeCertificatePopup}
    //     />
    //   )}
    // </div>

    // Это я реализовываю исправления!!!
    <div className={styles.container}>
      {isScreenLgCertificateList && (
        <div className={styles.certificate}>
          <div className={styles.certificate_list_upBlock}>
            <div className={styles.certificate_list_upBlock_left}>
              <h1 className={styles.certificate_list_upBlock_title}>
                Сертификаты
              </h1>
              <p className={styles.certificate_list_upBlock_text}>
                Раздел содержит информацию о сертификации и соответствии
                продукции международным и национальным стандартам качества,
                таким как{" "}
                <span className={styles.certificate_list_upBlock_text_span}>
                  ISO 9001, API, ASME, DIN
                </span>{" "}
                и другим. Компания может предоставить сертификаты на свои
                изделия и комплектующие для доказательства их соответствия
                требованиям заказчиков и рынка в целом.
              </p>
            </div>

            <div className={styles.certificate_list_upBlock_right}>
              <img
                src={DC}
                alt="certificate"
                onClick={() => openCertificatePopup(DC)}
                className={styles.certificate_image}
              />
              <img
                src={ISO}
                alt="certificate"
                onClick={() => openCertificatePopup(ISO)}
                className={styles.certificate_image}
              />
            </div>
          </div>

          <div className={styles.certificate_list_downBlock}>
            <img
              src={TCTP1}
              alt="certificate"
              onClick={() => openCertificatePopup(TCTP1)}
              className={styles.certificate_image}
            />
            <img
              src={TCTP2}
              alt="certificate"
              onClick={() => openCertificatePopup(TCTP2)}
              className={styles.certificate_image}
            />
          </div>
        </div>
      )}


      
      {/* {certificatePopupOpen && (
        <SertificatePopup
          certificate={selectedCertificate}
          onClose={closeCertificatePopup}
        />
      )} */}
    </div>
  );
}
