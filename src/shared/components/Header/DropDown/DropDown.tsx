import { Link } from "react-router-dom";
import styles from "./dropDown.module.css";

export function DropDown( {handleLinkClick, isOpenNavBar, isOpen}: any) {
  return (
    <>
      <div className={styles.dropdown}>
        <Link to="/productlist" className={styles.navLink}>
          Продукция
        </Link>
        {isOpen && (
          <ul className={styles.dropdownList}>
            <li className={styles.dropdownItem}>
              <Link to="/otvod" onClick={handleLinkClick}>
                Отводы
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/perehod" onClick={handleLinkClick}>
                Переходы
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/troynik" onClick={handleLinkClick}>
                Тройники
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/flanec" onClick={handleLinkClick}>
                Фланцы
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/zaglushka" onClick={handleLinkClick}>
                Заглушки
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/dno" onClick={handleLinkClick}>
                Днища
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/opora" onClick={handleLinkClick}>
                Опоры
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/shtucer" onClick={handleLinkClick}>
                Штуцеры
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productinfo" onClick={handleLinkClick}>
                Запорная арматура
              </Link>
            </li>
          </ul>
        )}
        
        {isOpenNavBar && (
          <ul className={styles.dropdownList}>
            <li className={styles.dropdownItem}>
              <Link to="/otvod" onClick={handleLinkClick}>
                Отводы
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/perehod" onClick={handleLinkClick}>
                Переходы
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/troynik" onClick={handleLinkClick}>
                Тройники
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/flanec" onClick={handleLinkClick}>
                Фланцы
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/zaglushka" onClick={handleLinkClick}>
                Заглушки
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/dno" onClick={handleLinkClick}>
                Днища
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/opora" onClick={handleLinkClick}>
                Опоры
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/shtucer" onClick={handleLinkClick}>
                Штуцеры
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productinfo" onClick={handleLinkClick}>
                Запорная арматура
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
