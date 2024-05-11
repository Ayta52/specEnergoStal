import React from 'react';
import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../ProductInfo/Breadcrumbs';
import styles from './perehod.module.css';
import classNames from 'classnames';
import { useResize } from '../../common/UseResize';


const tabsInfoProductOtvod = [
  {
    label: "Отводы гнутые",
    content: (
      <>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>Rabotaet!!!!!!!!!!!!</p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>Отводы гнутые</li>
            <li className={styles.listItem}>Отводы стальные ГОСТ 17375</li>
            <li className={styles.listItem}>Отводы крутоизогнутые бесшовные</li>
          </ul>
        </div>
      </>
    ),
  },
];

const tabs = [
  {
    label: "отводы",
    content: (
      <>
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

          <p>Управляются шаровые краны вручную (на малых диаметрах) и с</p>
          <br />
          <p>
            Подвижным элементом (затвором) таких кранов служит пробка
            сферической формы — шар, по оси которой выполнено сквозное круглое
          </p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>Отводы гнутые</li>
            <li className={styles.listItem}>Отводы стальные ГОСТ 17375</li>
            <li className={styles.listItem}>Отводы крутоизогнутые бесшовные</li>
          </ul>
        </div>
      </>
    ),
  },
];
export function Perehod () {
  
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabRightBlock, setActiveTabRightBlock] = useState(0);
  
  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveTabRightBlock(0);
  };
  const handleTabClickRightBlock = (index) => {
    setActiveTabRightBlock(index);
    setActiveTab(0);
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
        <h1>{tabs[activeTab].label}</h1>
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

