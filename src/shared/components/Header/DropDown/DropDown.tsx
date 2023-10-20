import { Link } from "react-router-dom";
import styles from "./dropDown.module.css";
import { useResize } from "../../common/UseResize";
import humb from "../../../../icons/humburger.svg";

export function DropDown() {
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
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
