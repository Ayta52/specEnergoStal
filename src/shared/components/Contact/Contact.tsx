// import React from 'react';
import styles from './contact.module.css';

export function Contact() {
  return (
    <div className={styles.contact_main}>
      <h1>Контакты</h1>

      <div className={styles.contactInfo}>
        <div className={styles.leftBlock}>
          <div>
            <span className={styles.contactInfo_title}>юридический адрес</span>
            <p className={styles.contactInfo_text}>
              606107, Нижегородская обл., г.Павлово, ул.Пионерская, д.1г
            </p>
            <button className={styles.contactInfo_btn}>
              смотреть на карте
              <span>
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L8 8L2 14"
                    stroke="#008FFF"
                    stroke-width="2"
                    stroke-linecap="square"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div>
            <span className={styles.contactInfo_title}>фактический адрес</span>
            <p className={styles.contactInfo_text}>
              603105, г.Нижний Новгород, ул.Ванеева, д.34 офис 504
            </p>
            <button className={styles.contactInfo_btn}>
              смотреть на карте
              <span>
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L8 8L2 14"
                    stroke="#008FFF"
                    stroke-width="2"
                    stroke-linecap="square"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className={styles.centerBlock}>
          <div>
            <span className={styles.contactInfo_title}>телефон</span>
            <a className={styles.contactInfo_text} href="tel:+78312100108">
              +7 831 210 01 08
            </a>
          </div>

          <div>
            <span className={styles.contactInfo_title}>факс</span>
            <a className={styles.contactInfo_text} href="tel:+78312100108">
              +7 831 210 01 08
            </a>
          </div>

          <div>
            <span className={styles.contactInfo_title}>электронная почта</span>
            <p className={styles.contactInfo_text}>info@senergostal.ru</p>
          </div>
        </div>

        <div className={styles.rightBlock}>
          <div>
            <span className={styles.contactInfo_title}>ИНН</span>
            <p className={styles.contactInfo_text}>5252033490</p>
          </div>
          <div>
            <span className={styles.contactInfo_title}>КПП</span>
            <p className={styles.contactInfo_text}>525201001</p>
          </div>
          <div>
            <span className={styles.contactInfo_title}>ОГРН</span>
            <p className={styles.contactInfo_text}>1135252003743</p>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor:0a671160ed0f0fa7e65a15c6574e877ba86d7ade85c6c587d258a161c0b352c0&amp;source=constructor"
          width="1920"
          height="600"
          title="Map Widget"
        ></iframe>
        <div className={styles.difference}></div>
      </div>
    </div>
  );
}
