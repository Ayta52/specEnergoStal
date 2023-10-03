// import React from 'react';
import { Link } from "react-router-dom";
import styles from "./dropDown.module.css";

export function DropDown() {
  return (
    <>
      <Link to="/" className={styles.navLink}>
        Главная
      </Link>
    </>
  );
}
