/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import styles from './productInfo.module.css';
import classNames from 'classnames';
import { useResize } from '../common/UseResize';
import { DropDownInfo } from './DropDownInfo';

// Переделать потом, когда будет информация по остальной продукции!
// В общем на "запорную арматуру" я поставил роут productInfo (в хедере и продукт листе),
// надо будет поменять, когда уже окончательно будет известен весь контент продукции 
// нужно будет конкретно поменять роутинг


const tabs = [
  {
    label: "краны шаровые",
    content: (
      <div className={styles.infoTab}>
        <div className={styles.productInfoContentLeft}>
          <p className={styles.productInfoText}>
            Шаровой кран — разновидность запорной арматуры, элемент которого
            имеет сферическую форму. Это один из современных и прогрессивных
            типов запорной арматуры, находящий всё большее применение для
            различных условий работы в трубопроводах, транспортирующих природный
            газ и нефть, системах городского газоснабжения и других областях.
            Имеется также возможность использовать его в качестве регулирующей
            арматуры. Конструкция шаровых кранов не является новинкой и известна
            уже более 100 лет, однако в ранних вариантах она не обеспечивала
            плотного перекрытия прохода среды из-за трудности её обеспечения
            металлическими поверхностями шаровой пробки и сёдел корпуса.
            Появление и внедрение в арматуростроение таких материалов как
            фторопласт, синтетических каучуков для изготовления сёдел привели к
            началу широкого использования шаровых кранов. Новые материалы
            позволили обеспечить плотность закрытия и существенно снизить
            усилия, необходимые для управления краном.
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
            использованием механизированного привода — электрического, пневмо- и
            гидравлического, причём для кранов на газопроводах имеется
            возможность использовать в качестве управляющей среды пневмопривода
            рабочую среду, транспортируемую по трубопроводу.
          </p>
          <br />
          <p>
            Подвижным элементом (затвором) таких кранов служит пробка
            сферической формы — шар, по оси которой выполнено сквозное круглое
            отверстие для прохода среды. В проходных кранах для полного закрытия
            или открытия прохода достаточно повернуть шар на 90°. Диаметр
            отверстия чаще всего соответствует внутреннему диаметру
            трубопровода, на который устанавливается кран, называющийся в этом
            случае полнопроходным. Гидравлические потери при проходе рабочей
            среды через полностью открытый кран весьма малы, практически такие
            же как при проходе среды через трубу, равную по длине корпусу крана,
            что в разы меньше, чем в других типах запорной арматуры. Это ценное
            качество сделало шаровые краны основным запорным устройством на
            линейной части магистральных газопроводов. Однако для уменьшения
            габаритов и крутящих моментов, необходимых для управления арматурой,
            иногда применяются суженные краны.
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
            inventore, in labore repudiandae doloremque sequi aperiam ullam
            soluta id nesciunt expedita tempora, nobis, culpa totam ex. Iste vel
            quidem totam!
          </p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis molestiae alias facere explicabo commodi maiores,
              neque esse, labore distinctio perferendis voluptatum amet cumque
              libero blanditiis? Rem cumque obcaecati alias ipsam! Excepturi
              ipsa, odio pariatur officia ea iste delectus, at dolor atque eum,
              sequi aliquid obcaecati nisi optio provident rem architecto
              similique aspernatur! Ea molestias vel aliquid, quis quos quidem
              in?
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
            delectus nemo ipsa ab sunt maxime tenetur temporibus iusto hic quasi
            eligendi asperiores quae voluptas, eaque, porro, vitae eius nulla!
            Repudiandae ullam accusantium accusamus vitae dignissimos sunt amet
            nisi excepturi itaque sequi sed a voluptas harum minima nobis quasi
            numquam aperiam, asperiores fuga voluptatem voluptates non ipsum
            rem! Explicabo, numquam! Quas eaque debitis doloribus aut
            dignissimos, at hic recusandae! Similique officiis minus quas cum
            earum perspiciatis, unde tenetur? Sapiente, consequatur iste libero
            natus illo asperiores consectetur amet. Adipisci, repudiandae
            reiciendis.
          </p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus vitae error dolor quaerat eos molestiae, facilis at
              necessitatibus veritatis totam consequuntur praesentium! Nam unde
              laborum eius totam, dolorum commodi eligendi. Facilis itaque quis
              sed odit earum distinctio dignissimos consectetur repudiandae aut
              sapiente adipisci veritatis, ex dolor temporibus molestiae
              architecto rem? Debitis nostrum qui assumenda, culpa iusto minus
              error esse eius.
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
            quos officia laudantium aperiam, id magnam vitae accusamus
            consequatur. Odit, iure? Neque dolores modi, laboriosam unde harum
            voluptates rerum nisi provident. Perspiciatis accusamus explicabo
            repudiandae minus, molestiae maxime sunt unde ea neque obcaecati
            aspernatur nihil at culpa praesentium et dolores est nostrum tempore
            facilis laborum rerum necessitatibus, eligendi maiores suscipit.
            Dicta. Eligendi dolores, esse voluptatem voluptatum quia quae non
            delectus amet libero natus officiis cum, sint numquam distinctio
            alias dignissimos molestiae aspernatur consectetur eum repellendus
            recusandae eos quas? Laudantium, nemo nesciunt! Tempora eius
            inventore fugit perferendis exercitationem commodi, doloremque
            debitis, nostrum quo rem atque vero iusto hic magni, minus explicabo
            eum reprehenderit? Obcaecati nesciunt quod asperiores perferendis,
            voluptate placeat dolorem quia!
          </p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              excepturi qui non ducimus enim molestias quia nam sit, unde sunt
              maiores exercitationem deserunt, eum molestiae in incidunt? Non,
              nulla amet.
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
            modi non numquam, aliquam obcaecati ut, debitis distinctio tenetur
            laudantium totam aut saepe culpa quia. In facere totam nesciunt
            repellat consequuntur? Itaque ex, quis tempore ut voluptate
            doloribus, fuga aut minima saepe quasi dolorem? Tempore ad facere
            ducimus? Recusandae ab doloremque eum, corporis eveniet omnis
            voluptatibus. Blanditiis maiores voluptate neque iure. Dolorem
            incidunt, natus perferendis dolorum aperiam ut in voluptate aliquid
            quo, molestiae quasi repellat ducimus asperiores minus voluptatibus
            ratione ea assumenda quas fugiat veritatis illo, delectus maxime
            nobis! Ratione, quo! Neque sapiente perspiciatis quia ea corrupti
            laboriosam nostrum eligendi iste doloremque facere! Recusandae nam
            qui quasi harum esse quod saepe, sed ullam voluptatem necessitatibus
            doloribus porro, molestiae est, dignissimos voluptas. Beatae
            laboriosam nemo nulla dolores magni esse a perspiciatis quasi
            corporis fugiat dicta, earum sapiente optio consequatur quam rem,
            minima ducimus autem quas nostrum asperiores suscipit. Et
            consectetur qui eaque.
          </p>
        </div>

        <div className={styles.productInfoContentRight}>
          <ul>
            <li className={styles.listItem}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus eveniet dolore quasi, velit rerum beatae ipsum
              laudantium perspiciatis excepturi quidem ut possimus voluptatum
              perferendis eum fugit asperiores tempora reiciendis veniam.
              Dolorum excepturi, aliquam suscipit ea, natus tempora culpa sit
              praesentium nesciunt eum quasi repellat deleniti, perspiciatis quo
              pariatur! Nesciunt vitae recusandae molestiae quod nam quisquam
              temporibus quibusdam beatae porro voluptates?
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];
export function ProductInfo() {
  
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

