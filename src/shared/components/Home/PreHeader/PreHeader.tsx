// import React from 'react';
import { useResize } from "../../common/UseResize";
import styles from "./preheader.module.css";

export function PreHeader() {
  const { width, isScreenPreheaderBR, isScreenPreheaderBR400 } = useResize();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleDiv}>
          <h2 className={styles.title}>
            Производство и&#160;комплектация{"\n"}{" "}
            <span className={styles.titleBlue}>трубопроводных&#160;систем</span>
            {"\n"} для&#160;промышленности
          </h2>
        </div>

        <div className={styles.rightDescr}>
          <p className={styles.rightDescrP}>Обеспечиваем потребности {"\n"}
            предприятий и заводов&#160;России {"\n"}
            и стран СНГ с 2006 года</p>
        </div>
      </div>
    </>
  );
}
