import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import humb from "../../../../icons/humburger.svg";
import styles from './dropDownTest.module.css';
import { DropDown } from '../../Header/DropDown';

export function DropDownTest() {
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
  
    useEffect(() => {
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <img
          className={styles.navLink}
          src={humb}
          alt="humb"
          onClick={() => setIsOpen(!isOpen)}
        />
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>
              <Link to="/" onClick={handleLinkClick}>
                Гавная
              </Link>
            </li>
            {/* <li className={styles.dropdownItem}>
              <DropDown />
            </li> */}
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