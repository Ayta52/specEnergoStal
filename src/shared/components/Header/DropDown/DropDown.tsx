import { Link } from "react-router-dom";
import { useActiveTab } from "../../../utils/context";
import styles from "./dropDown.module.css";

export function DropDown( {handleLinkClick, isOpenNavBar, isOpen}: any) {
  const {setActiveTab} = useActiveTab();
  const handleTabClick = (index: number) => {
    handleLinkClick(index);
    setActiveTab(index);
  };
  return (
    <>
      <div className={styles.dropdown}>
        <Link to="/productlist" className={styles.navLink}>
          Продукция
        </Link>
        {isOpen && (
          <ul className={styles.dropdownList}>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(0)}>
                Отводы
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(1)}>
                Переходы
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(2)}>
                Тройники
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(3)}>
                Фланцы
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(4)}>
                Заглушки
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(5)}>
                Угольники точёные
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(6)}>
                Днища
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(7)}>
                Опоры
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(8)}>
                Запорная арматура
              </Link>
            </li>
          </ul>
        )}
        
        {isOpenNavBar && (
          <ul className={styles.dropdownList}>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(0)}>
                Отводы
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(1)}>
                Переходы
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(2)}>
                Тройники
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(3)}>
                Фланцы
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(4)}>
                Заглушки
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(5)}>
                Угольники точёные
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(6)}>
                Днища
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(7)}>
                Опоры
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/productdescription" onClick={() => handleTabClick(8)}>
                Запорная арматура
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
