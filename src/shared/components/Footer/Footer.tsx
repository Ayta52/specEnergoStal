/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import Logo from '../../../img/logo.png';
import styles from './footer.module.css';
import { useActiveTab } from '../../utils/context';

export function Footer() {
  const {setActiveTab} = useActiveTab();
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.footerContainer}>
      <Link to={"/"}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>

      <div className={styles.footerLinks}>
        <div className={styles.footerRightLinksRouting}>
          <Link to="/">Главная</Link>
          <Link to="/productlist">Продукция</Link>
          <Link to="/certificatelist">Сертификаты</Link>
          <Link to="/contact">Контакты</Link>
        </div>

        <div className={styles.footerRightLinksProducts}>
          <Link to="/productdescription" onClick={() => handleTabClick(0)}>Отводы</Link>
          <Link to="/productdescription" onClick={() => handleTabClick(1)}>Переходы</Link>
          <Link to="/productdescription" onClick={() => handleTabClick(2)}>Тройники</Link>
          <Link to="/productdescription" onClick={() => handleTabClick(3)}>Фланцы</Link>
          <Link to="/productdescription" onClick={() => handleTabClick(4)}>Заглушки</Link>
          <Link to="/productdescription" onClick={() => handleTabClick(5)}>Угольники точёные</Link>
          <Link to="/productdescription" onClick={() => handleTabClick(6)}>Днища</Link>
          <Link className={styles.footerRightLinksProductsLast} to="/productdescription" onClick={() => handleTabClick(7)}>Запорная арматура</Link>
        </div>
      </div>
    </div>
  );
}
