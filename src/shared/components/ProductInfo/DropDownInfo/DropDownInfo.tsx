/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import arrow from "../../../../icons/productInfoArrow.svg";
import styles from './dropDownInfo.module.css';
import classNames from 'classnames';

export function DropDownInfo({tabs, handleTabClick, activeTab, setActiveTab}) {

  return (
    <div className={styles.container}>
       <>
      <div className={styles.dropdown}>
        <div className={styles.dropdownTitleFlex}>
          Выбрать
          <img src={arrow} alt="arrow" />
        </div>
        
        <ul className={styles.dropdownList}>
          <li className={styles.dropdownItem}>
            {/* <button>Гавная</button> */}

            {tabs.map((tab, index) => (
              <button
                key={index}
                className={classNames(
                  styles.styleTab,
                  index === activeTab ? styles.activeLinks : ""
                )}
                onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </button>
            ))}
          </li>
          {/* <li className={styles.dropdownItem}>
            <button>Сертификаты</button>
          </li>
          <li className={styles.dropdownItem}>
            <button>Контакты</button>
          </li> */}
        </ul>
      </div>
    </>
    </div>
  );
}

