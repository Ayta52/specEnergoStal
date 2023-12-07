// import React from 'react';
import { useResize } from "../../common/UseResize";
import styles from "./preheader.module.css";

export function PreHeader() {
  const { width } = useResize();
  const text = {
    title: <h2 className={styles.title}>
    Производство <br className={styles.br1}/>{" "}и комплектация <br className={styles.br2}/>{" "}
    <span className={styles.titleBlue}>трубопроводных систем</span>
    <br className={styles.br3}/> для промышленности</h2>,

    description: 
      <>
        <p className={styles.rightDescrP}>Обеспечиваем потребности</p>
        <p className={styles.rightDescrP}>предприятий и заводов России </p>
        <p className={styles.rightDescrP}>и стран СНГ с 2006 года</p>
      </>
    }
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleDiv}>{text.title}</div>

        <div className={styles.rightDescr}>
          {/* {width <= 360 ? (
            <p className={styles.rightDescrP}>
              Обеспечиваем потребности предприятий и заводов России и стран СНГ
              с 2006 года
            </p>
          ) : (
            text.description
          )} */}

          {text.description}
        </div>
      </div>
    </>
  );
}

