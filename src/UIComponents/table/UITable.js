import { useState, useCallback, memo } from "react";
import Header from "./Header/Header";
import RadioButton from "../RadioButton/RadioButton";
import Checkbox from "../Checkbox/Checkbox";
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
            {props.labels.map((col, index) => (
              <div
                className={
                  index === 0 && props.config.selection === null
                    ? "firstCell"
                    : "cell"
                }
                key={index}
              >
                {data[col.field]}
              </div>
            ))}
          </div>
        ))}
    </section>
  );
}

export default memo(UITable);
