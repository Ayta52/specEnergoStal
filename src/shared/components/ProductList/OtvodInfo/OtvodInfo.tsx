import React from 'react';
import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../ProductInfo/Breadcrumbs';
import styles from './otvod.module.css';
import classNames from 'classnames';
import { useResize } from '../../common/UseResize';
import { DropDownInfo } from '../../ProductInfo/DropDownInfo/DropDownInfo';


const tabs = [
  {
    label: "краны шаровые",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>
            Шаровой кран — разновидность запорной арматуры, элемент которого
          
          </p>
          <br />
          <p>
            Кроме вышесказанного шаровые краны имеют ряд других достоинств,
            среди которых:
          </p>

          <ul>
            <li>простота конструкции;</li>
            <li>высокая и надёжная герметичность;</li>
            <li>небольшие габариты;</li>
            <li>
              простая форма проточной части и отсутствие в ней застойных зон;
            </li>
            <li>удобное управление;</li>
            <li>малое время, затрачиваемое на поворот;</li>
            <li>
              применимость для вязких и загрязнённых сред, суспензий, пульп и
              шламов.
            </li>
          </ul>

          <p>
            Управляются шаровые краны вручную (на малых диаметрах) и с
            
          </p>
          <br />
          <p>
            Подвижным элементом (затвором) таких кранов служит пробка
            сферической формы — шар, по оси которой выполнено сквозное круглое
           
          </p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Кран шаровой нержавеющий фланцевый
            </li>
            <li className={styles.listItem}>
              Кран шаровой нержавеющий (под приварку, муфтовый, штуцерный)
              запорный с ручным управлением
            </li>
            <li className={styles.listItem}>
              Кран шаровой (Компакт) нержавеющий межфланцевый ручной запорный
            </li>
            <li className={styles.listItem}>
              Кран шаровой нержавеющий (с патрубками под приварку, муфтовый,
              штуцерный)
            </li>
            <li className={styles.listItem}>
              Краны шаровые трехходовые фланцевые
            </li>
            <li className={styles.listItem}>
              Кран шаровой стальной фланцевый запорный с ручным управлением
            </li>
            <li className={styles.listItem}>
              Кран шаровой стальной (с патрубками под приварку, муфтовый,
              штуцерный)
            </li>
            <li className={styles.listItem}>
              Кран шаровой стальной (с патрубками под приварку, муфтовый,
              штуцерный)
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "задвижки",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
         
          </p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "затворы",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga natus
         
          </p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "клапаны",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        
          </p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
           
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "электронасосы",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
     
          </p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];
export function OtvodInfo() {
  
  const [activeTab, setActiveTab] = useState(0);
  
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  
  const paths = [
    { name: 'главная', url: '/' },
    { name: 'продукция', url: '/productlist' },
    { name: 'запорная арматура', url: '/productinfo' },
    { name: `${tabs[activeTab].label}`, url: '#' },
  ];

  const {
    isScreenMd,
    isScreenBigMd
  } = useResize();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className={styles.container}>
      <Breadcrumbs paths={paths} />

      <div className={styles.productInfoTabs}>
        <h1>Запорная арматура</h1>
        {isScreenMd && (
          <DropDownInfo
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleTabClick={handleTabClick}
            tabs={tabs}
          />
        )}
        {isScreenBigMd && (
          <div className={styles.tabContent}>
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
          </div>
        )}

        <div className={styles.productInfoContent}>
          <div className={styles.infoTab}> {tabs[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
}

