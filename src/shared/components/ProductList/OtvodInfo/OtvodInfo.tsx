import React from 'react';
import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../ProductInfo/Breadcrumbs';
import styles from './otvod.module.css';
import classNames from 'classnames';
import { useResize } from '../../common/UseResize';
import { DropDownInfo } from '../../ProductInfo/DropDownInfo/DropDownInfo';

const tabsInfoProductOtvod = [
  {
    label: "Отводы гнутые",
    contentLeft: (
      <div className={styles.productInfoContentLeft}>
        <p className={styles.productInfoText}>
          Изготавливаем отводы гнутые по следующим нормативам:
        </p>
        <br />
        <table className={styles.iksweb}>
          <tbody>
            <tr>
              <td>Отводы по ОСТ 36-42-81</td>
              <td>Отводы по ОСТ 108.321.13-82</td>
              <td>Отводы по ОСТ 108.321.22-82</td>
            </tr>
            <tr>
              <td>Отводы по ГОСТ 22793-83</td>
              <td>Отводы по ОСТ 108.321.14-82</td>
              <td>Отводы по ОСТ 108.321.23-82</td>
            </tr>
            <tr>
              <td>Отводы по ГОСТ 24950-81</td>
              <td>Отводы по ОСТ 108.321.15-82</td>
              <td>Отводы по ОСТ 108.321.24-82</td>
            </tr>
            <tr>
              <td>Отводы по ГОСТ 22790-89</td>
              <td>Отводы по ОСТ 108.321.16-82</td>
              <td>Отводы по ОСТ 108.321.25-82</td>
            </tr>
            <tr>
              <td>Отводы по ОСТ 24.125.03-89</td>
              <td>Отводы по ОСТ 108.321.17-82</td>
              <td>Отводы по СТО ЦКТИ 321.01-2009</td>
            </tr>
            <tr>
              <td>Отводы по ОСТ 24.125.04-89</td>
              <td>Отводы по ОСТ 108.321.18-82</td>
              <td>Отводы по СТО ЦКТИ 321.02-2009</td>
            </tr>
            <tr>
              <td>Отводы по ОСТ 34-10-421-90</td>
              <td>Отводы по ОСТ 108.321.19-82</td>
              <td>Отводы по СТО ЦКТИ 321.05-2009</td>
            </tr>
            <tr>
              <td>Отводы по ОСТ 108.321.11-82</td>
              <td>Отводы по ОСТ 108.321.20-82</td>
              <td></td>
            </tr>
            <tr>
              <td>Отводы по ОСТ 108.321.12-82</td>
              <td>Отводы по ОСТ 108.321.21-82</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p>
          Радиус гиба гнутых отводов варьируется от 2 до 20 Ду. Угол изгиба в
          соответствии с ГОСТ 22793-83 начинается с показателя 15˚, а
          заканчивают модельный ряд отводы с углом 90˚. В то же время компания
          ООО "СПЕЦЭНЕРГОСТАЛЬ" предлагает своим заказчикам изготовление гнутых
          отводов с углами поворота, начиная от 5˚ и с градацией через 1˚
        </p>
        <p>
          В зависимости от толщины стенки и использованной для производства
          марки стали гнутые стальные отводы рассчитаны на рабочее давление до
          32 МПа и температурный режим в диапазоне от -70˚ до +650˚. В качестве
          материала для изготовления данного типа отводов используются фрагменты
          стальных бесшовных труб соответствующего диаметра из углеродистой или
          низколегированной стали. Производство гнутых стальных отводов
          осуществляют одним из двух способов:
        </p>
        <ul>
          <li>гнутьем в холодном состоянии (ГО);</li>
          <li>горячим гнутьем (ОГ)</li>
        </ul>

        <p>
          При этом геометрические параметры холодногнутых отводов достаточно
          ограничены: с Ду219 до Ду1420, а угол загиба не может превышать 27˚.
          При использовании горячего метода угол поворота отвода может быть
          практически любым без ущерба качественным характеристикам основного
          материала.
        </p>
        <br />
        <p>
          Подвижным элементом (затвором) таких кранов служит пробка сферической
          формы — шар, по оси которой выполнено сквозное круглое
        </p>
      </div>
    ),
  },

  {
    label: "Отводы стальные ГОСТ 17375",
    contentLeft: (
      <div className={styles.productInfoContentLeft}>
        <p className={styles.productInfoText}>Отводы стальные ГОСТ 17375</p>
      </div>
    ),
  },

  {
    label: "Отводы крутоизогнутые бесшовные",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>Rabotaet!!!!!!!!!!!!</p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>Отводы гнутые</li>
            <li className={styles.listItem}>Отводы стальные ГОСТ 17375</li>
            <li className={styles.listItem}>Отводы крутоизогнутые бесшовные</li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>Вставки кривые ГОСТ 24950-81</li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами
              содержащих сероводород
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    label: "Отводы гнутые для трубопроводов ТЭС",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>Rabotaet!!!!!!!!!!!!</p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>Отводы гнутые</li>
            <li className={styles.listItem}>Отводы стальные ГОСТ 17375</li>
            <li className={styles.listItem}>Отводы крутоизогнутые бесшовные</li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>Вставки кривые ГОСТ 24950-81</li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами
              содержащих сероводород
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    label: "Отводы сварные для трубопроводов АЭС",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>Rabotaet!!!!!!!!!!!!</p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>Отводы гнутые</li>
            <li className={styles.listItem}>Отводы стальные ГОСТ 17375</li>
            <li className={styles.listItem}>Отводы крутоизогнутые бесшовные</li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>Вставки кривые ГОСТ 24950-81</li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами
              содержащих сероводород
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    label: "Вставки кривые ГОСТ 24950-81",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>Rabotaet!!!!!!!!!!!!</p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>Отводы гнутые</li>
            <li className={styles.listItem}>Отводы стальные ГОСТ 17375</li>
            <li className={styles.listItem}>Отводы крутоизогнутые бесшовные</li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>Вставки кривые ГОСТ 24950-81</li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами
              содержащих сероводород
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    label: "Отводы для магистральных и промысловых газопроводов",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>Rabotaet!!!!!!!!!!!!</p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>Отводы гнутые</li>
            <li className={styles.listItem}>Отводы стальные ГОСТ 17375</li>
            <li className={styles.listItem}>Отводы крутоизогнутые бесшовные</li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>Вставки кривые ГОСТ 24950-81</li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами
              содержащих сероводород
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    label: "Отводы повышенной коррозионной активности",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>Rabotaet!!!!!!!!!!!!</p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>Отводы гнутые</li>
            <li className={styles.listItem}>Отводы стальные ГОСТ 17375</li>
            <li className={styles.listItem}>Отводы крутоизогнутые бесшовные</li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>Вставки кривые ГОСТ 24950-81</li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами
              содержащих сероводород
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    label:
      " Отводы гнутые для трубопроводов с неагрессивными средами и средами содержащих сероводород",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>Rabotaet!!!!!!!!!!!!</p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>Отводы гнутые</li>
            <li className={styles.listItem}>Отводы стальные ГОСТ 17375</li>
            <li className={styles.listItem}>Отводы крутоизогнутые бесшовные</li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>Вставки кривые ГОСТ 24950-81</li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами
              содержащих сероводород
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

const tabs = [
  {
    label: "отводы",
    contentLeft: (
      <div className={styles.productInfoContentLeft}>
        <p className={styles.productInfoText}>
          Шаровой кран — разновидность запорной арматуры, элемент которого
        </p>
        <br />
        <p>
          Кроме вышесказанного шаровые краны имеют ряд других достоинств, среди
          которых:
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
          Подвижным элементом (затвором) таких кранов служит пробка сферической
          формы — шар, по оси которой выполнено сквозное круглое
        </p>
      </div>
    ),
  },
  {
    label: "переходы",
    contentLeft: (
      <div className={styles.productInfoContentLeft}>
        <p className={styles.productInfoText}>
          Шаровой кран — разновидность запорной арматуры, элемент которого
        </p>
        <br />
        <p>
          Кроме вышесказанного шаровые краны имеют ряд других достоинств, среди
          которых:
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
          Подвижным элементом (затвором) таких кранов служит пробка сферической
          формы — шар, по оси которой выполнено сквозное круглое
        </p>
      </div>
    ),
  },
  {
    label: "тройники",
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
    label: "фланцы",
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
    label: "днища",
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
  {
    label: "заглушки",
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
  {
    label: "опоры",
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
  {
    label: "запорная арматура",
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
  const [activeSectionRight, setActiveSectionRight] = useState(0);
  
  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveSectionRight(0);
  };
  const handleSectionRightClick = (index) => {
    setActiveSectionRight(index);
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
          <div className={styles.infoTab}>
            {tabsInfoProductOtvod[activeSectionRight].contentLeft}
            <div className={styles.productInfoContentRight}>
              <ul>
                {tabsInfoProductOtvod.map((tab, index) => (
                  <li
                    className={classNames(
                      styles.listItem,
                      index === activeSectionRight ? styles.listItemActive : ""
                    )}
                    onClick={() => handleSectionRightClick(index)}
                    key={tab.label}
                  >
                    {tab.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* <div className={styles.infoTab}>
            <div className={styles.productInfoContentLeft}>
              <p className={styles.productInfoText}>
                {tabs[activeTab].contentLeft}
              </p>
            </div> */}

          {/* <div className={styles.productInfoContentRight}>
              <ul>
                {tabsInfoProductOtvod.map((tab) => (
                  <li className={styles.listItem} key={tab.label}>
                    {tab.label}
                  </li>
                ))}
              </ul>
            </div> */}
        </div>
      </div>
    </div>
    // </div>
  );
}

