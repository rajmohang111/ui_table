import { useState, useCallback, memo } from "react";
import Header from "./Header/Header";
import RadioButton from "../RadioButton/RadioButton";
import Checkbox from "../Checkbox/Checkbox";
import Card from "../Card/Card";
import "./UItable.css";

function UITable(props) {
  const [tblData, setTblData] = useState(props.data);
  const [selectAll, setSelectAll] = useState({ isSelected: false });

  const updateSelection = useCallback(
    (data) => {
      setTblData(data);
      props.rowSelect(data);
    },
    [props.data]
  );

  const sortData = useCallback(
    (config) => {
      let tmpTblData = [...tblData];

      if (config.sortState === "normal") {
        tmpTblData.sort((a, b) =>
          a[config.field] > b[config.field]
            ? 1
            : b[config.field] > a[config.field]
            ? -1
            : 0
        );
      } else if (config.sortState === "asc") {
        tmpTblData.sort((a, b) =>
          a[config.field] < b[config.field]
            ? 1
            : b[config.field] < a[config.field]
            ? -1
            : 0
        );
      } else if (config.sortState === "des") {
        tmpTblData = [...props.data];
      }

      setTblData(tmpTblData);
      props.sortedData(tmpTblData);
    },
    [props.data]
  );

  return (
    <section>
      <Header
        labels={props.labels}
        config={props.config}
        sortData={sortData}
        tblData={props.data}
        initialData={props.data}
        updateSelection={updateSelection}
        selectAll={selectAll}
        setSelectAll={setSelectAll}
      />
      {tblData &&
        tblData.map((data, index) => (
          <div className="row" key={index}>
            {props.config.selection === "radio" && (
              <RadioButton
                data={data}
                index={index}
                updateSelection={updateSelection}
                tblData={tblData}
              />
            )}
            {props.config.selection === "checkbox" && (
              <Checkbox
                data={data}
                index={index}
                updateSelection={updateSelection}
                setSelectAll={setSelectAll}
                tblData={tblData}
              />
            )}
            {(window.screen.width > 700 ||
              (props.config.mobileLayout !== "card" &&
                window.screen.width < 700)) &&
              props.labels.map((col, i) => (
                <div
                  className={
                    i === 0 && props.config.selection === null
                      ? `firstCell ${tblData.length - 1 === index && "noDivider"}`
                      : `cell ${tblData.length - 1 === index && "noDivider"}`
                  }
                  key={i}
                >
                  {data[col.field]}
                </div>
              ))}
            {props.config.mobileLayout === "card" &&
              window.screen.width < 700 && (
                <Card
                  labels={props.labels}
                  data={data}
                  lastRecord={tblData.length - 1 === index}
                />
              )}
          </div>
        ))}
    </section>
  );
}

export default memo(UITable);
