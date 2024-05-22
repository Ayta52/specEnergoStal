
import { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { DropDown } from "../DropDown/DropDown";
import humb from "../../../../icons/humburger.svg";
import styles from "./dropDownNavBar.module.css";

export function DropDownNavBar() {

  const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const handleLinkClick = () => {
      setIsOpen(false);
    };
  
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const isIPhone = /iPhone/.test(navigator.userAgent);
  
    useEffect(() => {
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      {isIPhone ? (
        <button className={styles.navLink} onTouchStart={() => setIsOpen(!isOpen)}>
          <img src={humb} alt="humb" />
        </button>
      ) : (
        <button className={styles.navLink} onClick={() => setIsOpen(!isOpen)}>
          <img src={humb} alt="humb" />
        </button>
      )}

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>
            <Link to="/" onClick={handleLinkClick}>
              Гавная
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <DropDown isOpen={isOpen} handleLinkClick={handleLinkClick} />
          </li>
          <li className={styles.dropdownItem}>
            <Link to="/certificatelist" onClick={handleLinkClick}>
              Сертификаты
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link to="/contact" onClick={handleLinkClick}>
              Контакты
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
