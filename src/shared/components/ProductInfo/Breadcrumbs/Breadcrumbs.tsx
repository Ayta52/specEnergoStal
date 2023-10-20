/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./breadcrumbs.module.css";

export function Breadcrumbs({paths}) {
  return (
    <div className={styles.breadСrumbs}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {paths.map((path, index) => (
            <li
              key={index}
              className={`breadcrumb-item ${
                index === paths.length - 1 ? "active" : ""
              }`}
            >
              {index === paths.length - 1 ? (
                <span>{path.name}</span>
              ) : (
                <a href={path.url}>&nbsp;{path.name}&nbsp; /&nbsp;</a>
              )}
            </li>
          ))}
        </ol>
        {" "}
      </nav>
    </div>
  );
}
