import styles from "./preheader.module.css";

export function PreHeader() {
  const isIPhone = /iPhone/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
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
      <div className={`${styles.container} ${
              isIPhone ? styles.containerIphone : ""
            } ${isAndroid ? styles.containerAndroid : ""}`}>
        <div className={`${styles.titleDiv} ${
              isIPhone ? styles.titleDivIphone : ""
            } ${isAndroid ? styles.titleDivAndroid : ""}`}>{text.title}</div>

        <div className={styles.rightDescr}>
          {text.description}
        </div>
      </div>
    </>
  );
}

