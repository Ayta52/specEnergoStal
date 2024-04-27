import React from 'react';
import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../ProductInfo/Breadcrumbs';
import styles from './otvod.module.css';
import classNames from 'classnames';
import { useResize } from '../../common/UseResize';
import { DropDownInfo } from '../../ProductInfo/DropDownInfo/DropDownInfo';

// ПОТОМ ПОДКЛЮЧИТЬ КОГДА БУДУТ ОСТАЛЬНЫЕ ТАБЫ
// const tabsInfoProductPerehod = [
//   {
//     label: "Perehooood",
//     content: (
//       <div className={styles.infoTab}>
//         <div className={styles.productInfoContentLeft}>
//           <p className={styles.productInfoText}>
//            Rabotaet perehod!!!!!!!!!!!!
//           </p>       
//         </div>

//         <div className={styles.productInfoContentRight}>
//           <ul>
//             <li className={styles.listItem}>
//               Отводы гнутые
//             </li>
//             <li className={styles.listItem}>
//               Отводы стальные ГОСТ 17375             
//             </li>
//             <li className={styles.listItem}>
//               Отводы крутоизогнутые бесшовные
//             </li>
//             <li className={styles.listItem}>
//               Отводы гнутые для трубопроводов ТЭС
//             </li>
//             <li className={styles.listItem}>
//               Отводы сварные для трубопроводов АЭС
//             </li>
//             <li className={styles.listItem}>
//               Вставки кривые ГОСТ 24950-81 
//             </li>
//             <li className={styles.listItem}>
//               Отводы для магистральных и промысловых газопроводов
//             </li>
//             <li className={styles.listItem}>
//               Отводы повышенной коррозионной активности
//             </li>
//             <li className={styles.listItem}>
//               Отводы гнутые для трубопроводов с неагрессивными средами и средами содержащих сероводород
//             </li>
            
//           </ul>
//         </div>
//       </div>
//     ),
//   },
// ]

const tabsInfoProductOtvod = [
  {
    label: "Отводы гнутые",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>
           Rabotaet!!!!!!!!!!!!
          </p>       
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Отводы гнутые
            </li>
            <li className={styles.listItem}>
              Отводы стальные ГОСТ 17375             
            </li>
            <li className={styles.listItem}>
              Отводы крутоизогнутые бесшовные
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>
              Вставки кривые ГОСТ 24950-81 
            </li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами содержащих сероводород
            </li>
            
          </ul>
        </div>
      </div>
    ),
  },

  {
    label: "Отводы стальные ГОСТ 17375",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>
           Rabotaet!!!!!!!!!!!!
          </p>       
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Отводы гнутые
            </li>
            <li className={styles.listItem}>
              Отводы стальные ГОСТ 17375             
            </li>
            <li className={styles.listItem}>
              Отводы крутоизогнутые бесшовные
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>
              Вставки кривые ГОСТ 24950-81 
            </li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами содержащих сероводород
            </li>
            
          </ul>
        </div>
      </div>
    ),
  },

  {
    label: "Отводы крутоизогнутые бесшовные",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>
           Rabotaet!!!!!!!!!!!!
          </p>       
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Отводы гнутые
            </li>
            <li className={styles.listItem}>
              Отводы стальные ГОСТ 17375             
            </li>
            <li className={styles.listItem}>
              Отводы крутоизогнутые бесшовные
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>
              Вставки кривые ГОСТ 24950-81 
            </li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами содержащих сероводород
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
          <p className={styles.productInfoText}>
           Rabotaet!!!!!!!!!!!!
          </p>       
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Отводы гнутые
            </li>
            <li className={styles.listItem}>
              Отводы стальные ГОСТ 17375             
            </li>
            <li className={styles.listItem}>
              Отводы крутоизогнутые бесшовные
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>
              Вставки кривые ГОСТ 24950-81 
            </li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами содержащих сероводород
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
          <p className={styles.productInfoText}>
           Rabotaet!!!!!!!!!!!!
          </p>       
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Отводы гнутые
            </li>
            <li className={styles.listItem}>
              Отводы стальные ГОСТ 17375             
            </li>
            <li className={styles.listItem}>
              Отводы крутоизогнутые бесшовные
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>
              Вставки кривые ГОСТ 24950-81 
            </li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами содержащих сероводород
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
          <p className={styles.productInfoText}>
           Rabotaet!!!!!!!!!!!!
          </p>       
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Отводы гнутые
            </li>
            <li className={styles.listItem}>
              Отводы стальные ГОСТ 17375             
            </li>
            <li className={styles.listItem}>
              Отводы крутоизогнутые бесшовные
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>
              Вставки кривые ГОСТ 24950-81 
            </li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами содержащих сероводород
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
          <p className={styles.productInfoText}>
           Rabotaet!!!!!!!!!!!!
          </p>       
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Отводы гнутые
            </li>
            <li className={styles.listItem}>
              Отводы стальные ГОСТ 17375             
            </li>
            <li className={styles.listItem}>
              Отводы крутоизогнутые бесшовные
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>
              Вставки кривые ГОСТ 24950-81 
            </li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами содержащих сероводород
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
          <p className={styles.productInfoText}>
           Rabotaet!!!!!!!!!!!!
          </p>       
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Отводы гнутые
            </li>
            <li className={styles.listItem}>
              Отводы стальные ГОСТ 17375             
            </li>
            <li className={styles.listItem}>
              Отводы крутоизогнутые бесшовные
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>
              Вставки кривые ГОСТ 24950-81 
            </li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами содержащих сероводород
            </li>
            
          </ul>
        </div>
      </div>
    ),
  },

  {
    label: " Отводы гнутые для трубопроводов с неагрессивными средами и средами содержащих сероводород",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>
           Rabotaet!!!!!!!!!!!!
          </p>       
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Отводы гнутые
            </li>
            <li className={styles.listItem}>
              Отводы стальные ГОСТ 17375             
            </li>
            <li className={styles.listItem}>
              Отводы крутоизогнутые бесшовные
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов ТЭС
            </li>
            <li className={styles.listItem}>
              Отводы сварные для трубопроводов АЭС
            </li>
            <li className={styles.listItem}>
              Вставки кривые ГОСТ 24950-81 
            </li>
            <li className={styles.listItem}>
              Отводы для магистральных и промысловых газопроводов
            </li>
            <li className={styles.listItem}>
              Отводы повышенной коррозионной активности
            </li>
            <li className={styles.listItem}>
              Отводы гнутые для трубопроводов с неагрессивными средами и средами содержащих сероводород
            </li>
            
          </ul>
        </div>
      </div>
    ),
  }
];

const tabs = [
  {
    label: "отводы",
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
           {tabsInfoProductOtvod.map((tab) => (
             <li className={styles.listItem} key={tab.label}>{tab.label}</li>
           ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "переходы",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
         
          </p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
          {/* {tabsInfoProductPerehod.map((tab) => (
             <li className={styles.listItem} key={tab.label}>{tab.label}</li>
           ))} */}
          </ul>
        </div>
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
  const [activeTabRightBlock, setActiveTabRightBlock] = useState(0);
  
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
          <div className={styles.infoTab}> {tabs[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
}

