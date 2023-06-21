import { useState, memo } from "react";
import descending from "../../../images/arrow.svg";
import sortingNetural from "../../../images/sortingNetural.svg";
import SortingUp from "../../../images/SortingUp.svg";
import "./Header.css";

function Header(props) {
  const [labels, setLabels] = useState(props.labels);
  let sortedData = [...props.tblData];

  const sortData = (config, index) => {
    let tmpLabels = labels.map((row, i) => {
      return { ...row, sortState: "normal" };
    });

    if (config.sortState === "normal") {
      sortedData.sort((a, b) =>
        a[config.field] > b[config.field]
          ? 1
          : b[config.field] > a[config.field]
          ? -1
          : 0
      );
      tmpLabels[index].sortState = "asc";
    } else if (config.sortState === "asc") {
      sortedData.sort((a, b) =>
        a[config.field] < b[config.field]
          ? 1
          : b[config.field] < a[config.field]
          ? -1
          : 0
      );
      tmpLabels[index].sortState = "des";
    } else if (config.sortState === "des") {
      sortedData = [...props.initialData];
      tmpLabels[index].sortState = "normal";
    }
    props.sortData(sortedData);
    setLabels(tmpLabels);
  };

  return (
    <header>
      {props.config.selection && <div className="noHeader"></div>}
      {labels &&
        labels.map((col, index) => (
          <div
            key={index}
            className={props.labels.length - 1 === index ? "last-col" : "col"}
          >
            {col.label}
            {col.sort && col.sortState === "normal" && (
              <img
                className="arrow"
                src={sortingNetural}
                alt="sortingNetural"
                onClick={() => sortData(col, index)}
              />
            )}
            {col.sort && col.sortState === "des" && (
              <img
                className="arrow"
                src={descending}
                alt="descending"
                onClick={() => sortData(col, index)}
              />
            )}
            {col.sort && col.sortState === "asc" && (
              <img
                className="arrow"
                src={SortingUp}
                alt="SortingUp"
                onClick={() => sortData(col, index)}
              />
            )}
          </div>
        ))}
    </header>
  );
}

export default memo(Header);
