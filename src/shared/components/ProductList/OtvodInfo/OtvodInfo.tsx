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
        <h3 className={styles.productInfoText}>
          Изготавливаем отводы гнутые по следующим нормативам:
        </h3>
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
        <table className={styles.iksweb}>
          <tbody>
            <tr>
              <th>По типу исполнения отводы могут быть:</th>
            </tr>
            <tr>
              <td>I — имеющие неравные прямые участки</td>
            </tr>
            <tr>
              <td>II — с равновеликими прямыми участкам </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h3 className={styles.productInfoText}>
          Нормативно-техническая документация
        </h3>
        <table className={styles.iksweb}>
          <tbody>
            <tr>
              <th>Стандарт</th>
              <th>Техническая характеристика</th>
              <th>Область применения</th>
            </tr>
            <tr>
              <td>ОСТ 108.321.11÷25-82</td>
              <td>Угол гиба θ=15°,30°,45°,60°,90°; P=37,27 МПа; Т=280°С.</td>
              <td>
                Для трубопроводов питательной воды тепловых электростанций
              </td>
            </tr>
            <tr>
              <td>СТО ЦКТИ 321.02-2009</td>
              <td>
                Угол гиба θ=15°,30°,45°,60°,90°; P= до 23,54 МПа; Т= до 450°С.
              </td>
              <td>Для трубопроводов пара и горячей воды тепловых станций</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    label: "Отводы стальные ГОСТ 17375",
    contentLeft: (
      <div className={styles.productInfoContentLeft}>
        <p>
          Изготовление отводов бесшовных в соответствии с ГОСТ 17375-01
          осуществляется по двум вариантам исполнения:
        </p>
        <ul>
          <li>DN 15 — 1000 мм; D 21,3 – 1016 мм</li>
          <li>DN 25 — 800 мм; D 32 – 820 мм</li>
        </ul>
        <p>
          Для производства отводов по первому варианту наиболее часто применяют
          марки стали TS4, TS9, Р5-Р43, Е24-1, Е24-2, по второму — 10, 20,
          17Г1С, 10Г2С1, 15ГС, 09Г2С, 12Х18н10т и прочие марки углеродистых и
          низколегированных сталей, в зависимости от особенностей эксплуатации и
          исходя их технического задания, предоставленного заказчиком.
        </p>
        <p>
          Стальные бесшовные отводы по ГОСТ 17375-2001 изготавливаются при
          помощи метода штамповки или горячей протяжки. Стандартные углы изгиба
          — 30˚, 45˚, 60˚, 90˚, 180˚, но в случае необходимости в нашей компании
          вы можете заказать и купить отводы с любым иным углом изгиба в
          соответствии с вашими технологическими потребностями.
        </p>
        <table className={styles.iksweb}>
          <tbody>
            <tr>
              <th>Стандарт</th>
              <th>Техническая характеристика</th>
              <th>Область применения</th>
            </tr>
            <tr>
              <td>ГОСТ 17375-2001</td>
              <td>
                Угол гиба ϕ=45°,60°,90°,180° Ру до 32 МПа( до 320 кгс/см²) Dy от
                15 мм до 1000 мм; Т= от -70°С до +450°С.
              </td>
              <td>
                Применяют для трубопроводов различного назначения, включая
                подконтрольные органам надзора
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    label: "Отводы крутоизогнутые бесшовные",
    contentLeft: (
      <div className={styles.productInfoContentLeft}>
        <h3 className={styles.productInfoText}>
          Технические особенности крутоизогнутых отводов
        </h3>
        <br />
        <p>
          Крутоизогнутые отводы могут быть изготовлены из низколегированной или
          углеродистой стали типа 3D по ГОСТ 17375-01 с R ≈ 1,5 DN, либо из
          стали типа 2D с R ≈ DN по ГОСТ 30753-2001. Помимо этого, для нужд
          отдельных специфических видов производства мы выпускаем отводы по ТУ
          1468-001-17192736-01 из легированных и высоколегированных сталей
          (15Х5М-У и подобных).
        </p>
        <br />
        <h3 className={styles.productInfoText}>
          Нормативно-техническая документация
        </h3>
        <table className={styles.iksweb}>
          <tbody>
            <tr>
              <th>Стандарт</th>
              <th>Техническая характеристика</th>
              <th>Область применения</th>
            </tr>
            <tr>
              <td>ГОСТ 30753-01</td>
              <td>
                R гиба ≈ DN; Угол гиба θ = 45°,60°;90°,180°; D от 57 мм до 820
                мм
              </td>
              <td>
                Для трубопроводов различного назначения, включая подконтрольные
                органам надзора
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    label: "Отводы гнутые для трубопроводов ТЭС",
    contentLeft: (
      <div className={styles.productInfoContentLeft}>
        <h3 className={styles.productInfoText}>
          Нормативно-техническая документация
        </h3>
        <table className={styles.iksweb}>
          <tbody>
            <tr>
              <th>Стандарт</th>
              <th>Техническая характеристика</th>
              <th>Область применения</th>
            </tr>
            <tr>
              <td>ОСТ 108.321.11÷25-82</td>
              <td>Угол гиба θ=15°,30°,45°,60°,90°; P=37,27 МПа; Т=280°С</td>
              <td>
                Для трубопроводов питательной воды тепловых электростанций
              </td>
            </tr>
            <tr>
              <td>СТО ЦКТИ 321.02-2009</td>
              <td>
                Угол гиба θ=15°,30°,45°,60°,90° P= до 23,54 МПа; Т= до 450°С.
              </td>
              <td>Для трубопроводов пара и горячей воды тепловых станций</td>
            </tr>
            <tr>
              <td>ОСТ 108.327.01÷03-82</td>
              <td>Угол гиба θ=90° P= до 37,27 МПа; Т= до 440°С.</td>
              <td>
                Для трубопроводов пара и горячей воды тепловых электростанций
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    label: "Отводы сварные для трубопроводов АЭС",
    contentLeft: (
      <div className={styles.productInfoContentLeft}>
        <h3 className={styles.productInfoText}>
          Нормативно-техническая документация
        </h3>
        <table className={styles.iksweb}>
          <tbody>
            <tr>
              <th>Стандарт</th>
              <th>Техническая характеристика</th>
              <th>Область применения</th>
            </tr>
            <tr>
              <td>ОСТ 34-42-661-84</td>
              <td>
                Угол гиба θ=15°,30°,45°,60°,90°; Рy до 4 МПа; Т= до 350°С; D от
                10 до 80 мм.
              </td>
              <td>
                Для трубопроводов атомных электростанций. Соответствует
                требованиям «Правил АЭС».
              </td>
            </tr>
            <tr>
              <td>ОСТ 34-42-832-86</td>
              <td>
                С приварными фланцами, подлежащие внутреннему антикоррозионному
                покрытию; Угол гиба θ=45°,60°,90°; Ру=0,6 МПа, 1 МПа; Т= до
                80°С; D от 50 до 600 мм.
              </td>
              <td>Для трубопроводов водоподготовки тепловых электростанций.</td>
            </tr>
            <tr>
              <td>ОСТ 34.10.699-97</td>
              <td>
                Угол гиба θ=30°,45°,60°,90°; Рраб до 2.2 МПа; Траб до 425°С; D
                от 40 до 600 мм.
              </td>
              <td>
                Для трубопроводов тепловых и атомных электростанций, включая
                трубопроводы групп В и С, АС.
              </td>
            </tr>
          </tbody>
        </table>
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

