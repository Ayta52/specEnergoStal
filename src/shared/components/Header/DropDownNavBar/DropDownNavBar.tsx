
import React from 'react';
import { Link } from "react-router-dom";
import { DropDown } from "../DropDown/DropDown";
import humb from "../../../../icons/humburger.svg";
import styles from "./dropDownNavBar.module.css";

export function DropDownNavBar() {
  return (
    <>
      <div className={styles.dropdown}>
        <img className={styles.navLink} src={humb} alt="humb" />
        <ul className={styles.dropdownList}>
          <li className={styles.dropdownItem}>
            <Link to="/">Гавная</Link>
          </li>
          <li className={styles.dropdownItem}>
            <DropDown />
          </li>
          <li className={styles.dropdownItem}>
            <Link to="/certificatelist">Сертификаты</Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link to="/contact">Контакты</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
