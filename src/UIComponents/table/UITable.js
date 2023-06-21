import { useState, memo } from "react";
import Header from "./Header/Header";
import RadioButton from "./RadioButton/RadioButton";
import Checkbox from "./Checkbox/Checkbox";
import "./UItable.css";

function UITable(props) {
  const [tblData, setTblData] = useState(props.data);

  const updateSelection = (data) => {
    setTblData(data);
    props.rowSelect(data);
  };

  const sortData = (data) => {
    let tmpTblData = [...data];
    setTblData(tmpTblData);
    props.sortedData(tmpTblData);
  };

  return (
    <section>
      <Header
        labels={props.labels}
        config={props.config}
        sortData={sortData}
        tblData={tblData}
        initialData={props.data}
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

export default UITable;
