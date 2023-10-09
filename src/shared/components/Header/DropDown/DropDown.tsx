import { Link } from "react-router-dom";
import styles from "./dropDown.module.css";

export function DropDown() {
  return (
    <>
      <div className={styles.dropdown}>
        <Link to="/productlist" className={styles.navLink}>
          Продукция
        </Link>
        <ul className={styles.dropdownList}>
          <li className={styles.dropdownItem}>
            <Link to="/otvod">Отводы</Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link to="/perehod">Переходы</Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link to="/troynik">Тройники</Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link to="/flanec">Фланцы</Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link to="/zaglushka">Заглушки</Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link to="/dno">Днища</Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link to="/opora">Опоры</Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link to="/shtucer">Штуцеры</Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link to="/productinfo">Запорная арматура</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
