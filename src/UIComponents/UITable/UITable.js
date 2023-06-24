import { useState, useEffect, useCallback, memo } from "react";
import { PropTypes } from "prop-types";

import Header from "./Header/Header";
import RadioButton from "../RadioButton/RadioButton";
import Checkbox from "../Checkbox/Checkbox";
import Card from "../Card/Card";
import "./UItable.css";

function UITable({ data: tbldata, rowSelect, sortedData, labels, config }) {
  const [tblData, setTblData] = useState(tbldata);
  const [selectAll, setSelectAll] = useState({ isSelected: false });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  const updateSelection = useCallback(
    (data) => {
      setTblData(data);
      rowSelect(data);
    },
    [rowSelect]
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
        tmpTblData = [...tbldata];
      }

      setTblData(tmpTblData);
      sortedData(tmpTblData);
    },
    [tblData, sortedData, tbldata]
  );

  return (
    <section className="table-section">
      <Header
        labels={labels}
        config={config}
        sortData={sortData}
        tblData={tbldata}
        initialData={tbldata}
        updateSelection={updateSelection}
        selectAll={selectAll}
        setSelectAll={setSelectAll}
        windowWidth={windowWidth}
      />
      {tblData &&
        tblData.map((data, index) => (
          <div className="row" key={index}>
            {config.selection === "radio" && (
              <RadioButton
                data={data}
                index={index}
                updateSelection={updateSelection}
                tblData={tblData}
              />
            )}
            {config.selection === "checkbox" && (
              <Checkbox
                data={data}
                index={index}
                updateSelection={updateSelection}
                setSelectAll={setSelectAll}
                tblData={tblData}
              />
            )}
            {(windowWidth > 700 ||
              (config.mobileLayout !== "card" && windowWidth < 700)) &&
              labels.map((col, i) => (
                <div
                  className={
                    i === 0 && config.selection === null
                      ? `firstCell ${
                          tblData.length - 1 === index && "noDivider"
                        }`
                      : `cell ${tblData.length - 1 === index && "noDivider"}`
                  }
                  key={i}
                >
                  {data[col.field]}
                </div>
              ))}
            {config.mobileLayout === "card" && windowWidth < 700 && (
              <Card
                labels={labels}
                data={data}
                lastRecord={tblData.length - 1 === index}
              />
            )}
          </div>
        ))}
    </section>
  );
}

UITable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  labels: PropTypes.arrayOf(PropTypes.object).isRequired,
  config: PropTypes.shape({
    selection: PropTypes.oneOf(["radio", "checkbox", null]),
    mobileLayout: PropTypes.oneOf(["card", null]),
    tableTitle: PropTypes.string.isRequired,
  }).isRequired,
  rowSelect: PropTypes.func.isRequired,
  sortedData: PropTypes.func.isRequired,
};

export default memo(UITable);
