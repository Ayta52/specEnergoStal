import { useEffect } from 'react';
import { useResize } from '../common/UseResize';
import styles from './contact.module.css';

export function Contact() {
  const {
    isScreenMd,
    isScreenXl
  } = useResize();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className={styles.contact_main}>
      <div className={styles.text_width}>
        <div >
          <h1 className={styles.contactH1}>Контакты</h1>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.leftBlock}>
            <div>
              <span className={styles.contactInfo_title}>
                юридический адрес
              </span>
              <p className={styles.contactInfo_text}>
                606107, Нижегородская обл., г.Павлово, ул.Пионерская, д.1г
              </p>
              <a href="#mapWidget" className={styles.contactInfo_btn}>
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
              </a>
            </div>

            <div>
              <span className={styles.contactInfo_title}>
                фактический адрес
              </span>
              <p className={styles.contactInfo_text}>
                603105, г.Нижний Новгород, ул.Ванеева, д.34 офис 413-416
              </p>
              <a href="#mapWidget" className={styles.contactInfo_btn}>
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
              </a>
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
              <span className={styles.contactInfo_title}>
                электронная почта
              </span>
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
            {isScreenXl && (
              <a href="#mapWidget" className={styles.contactInfo_btn}>
                смотреть реквизиты
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
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a671160ed0f0fa7e65a15c6574e877ba86d7ade85c6c587d258a161c0b352c0&amp;source=constructor"
          width={isScreenMd ? 440 : 1920}
          height={isScreenMd ? 450 : 600}
          title="Map Widget"
          id="mapWidget"
        ></iframe>
        <div className={styles.difference}></div>
      </div>

      {isScreenMd && (

        <div className={styles.rightBlockMobile}>
          <div className={styles.rightBlockMobileRecvisit}>
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

          <a href="#mapWidget" className={styles.contactInfo_btn}>
            смотреть реквизиты
          </a>
        </div>
      )}
    </div>
  );
}
