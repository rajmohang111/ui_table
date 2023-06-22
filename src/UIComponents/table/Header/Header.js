import { useState, useCallback, memo } from "react";
import Checkbox from "../../Checkbox/Checkbox";
import descending from "../../../images/arrow.svg";
import sortingNetural from "../../../images/sortingNetural.svg";
import SortingUp from "../../../images/SortingUp.svg";
import "./Header.css";

function Header(props) {
  const [labels, setLabels] = useState(props.labels);

  const sortData = useCallback(
    (config, index) => {
      let tmpLabels = labels.map((row, i) => {
        return { ...row, sortState: "normal" };
      });

      if (config.sortState === "normal") {
        tmpLabels[index].sortState = "asc";
      } else if (config.sortState === "asc") {
        tmpLabels[index].sortState = "des";
      } else if (config.sortState === "des") {
        tmpLabels[index].sortState = "normal";
      }
      props.sortData(config);
      setLabels(tmpLabels);
    },
    [props.labels]
  );

  return (
    <header>
      {props.config.selection && (
        <div className="noHeader">
          {window.screen.width < 700 &&
            props.config.selection === "checkbox" && (
              <Checkbox
                data={props.selectAll}
                index={-1}
                updateSelection={(data) => props.updateSelection(data)}
                setSelectAll={props.setSelectAll}
                tblData={props.tblData}
              />
            )}
          {window.screen.width < 700 && props.config.selection === "radio" && (
            <div className="empty"></div>
          )}
        </div>
      )}
      {labels &&
        labels.map((col, index) => (
          <div
            key={index}
            className={props.labels.length - 1 === index ? "last-col" : "col"}
          >
            {col.label}
            {window.screen.width > 700 &&
              col.sort &&
              col.sortState === "normal" && (
                <img
                  className="arrow"
                  src={sortingNetural}
                  alt="sortingNetural"
                  onClick={() => sortData(col, index)}
                />
              )}
            {window.screen.width > 700 &&
              col.sort &&
              col.sortState === "des" && (
                <img
                  className="arrow"
                  src={descending}
                  alt="descending"
                  onClick={() => sortData(col, index)}
                />
              )}
            {window.screen.width > 700 &&
              col.sort &&
              col.sortState === "asc" && (
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
