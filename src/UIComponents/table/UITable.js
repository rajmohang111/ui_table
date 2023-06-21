import "./UItable.css";
import Header from "./Header/Header";
import RadioButton from "./RadioButton/RadioButton";
import Checkbox from "./Checkbox/Checkbox";
import { useState } from "react";

function UITable(props) {
  const [tblData, setTblData] = useState(props.data);
  console.log(tblData);
  return (
    <section>
      <Header labels={props.labels} />
      {tblData &&
        tblData.map((data, index) => (
          <div className="row">
            {props.config.selection === "radio" && (
              <RadioButton
                data={data}
                index={index}
                setData={setTblData}
                tblData={tblData}
              />
            )}
            {props.config.selection === "checkbox" && (
              <Checkbox data={data} setData={setTblData} />
            )}
            {props.columns.map((col) => (
              <div className="cell">{data[col]}</div>
            ))}
          </div>
        ))}
      {/* <div className="row">
        <div className="iconCell">
          <div className="selected-outer-circle">
            <div className="selected-inner-circle">
              <span className="inside-content"></span>
            </div>
          </div>
        </div>
        <div className="cell">*Celcom Axiata (LTE)</div>
        <div className="cell">CELCOM / My Celcom / 502 19</div>
        <div className="cell">Yes</div>
      </div>
      <div className="row">
        <div className="iconCell">
          <div className="outer-circle">
            <div className="inner-circle">
              <span className="inside-content"></span>
            </div>
          </div>
        </div>
        <div className="cell">*Celcom Axiata (LTE)</div>
        <div className="cell">CELCOM / My Celcom / 502 19</div>
        <div className="cell">Yes</div>
      </div>
      <div className="row">
        <div className="iconCell">
          <div className="selected-outer-checkbox">
            <div className="inner-circle">
              <img className="tick" src={tick} alt="tick" />
            </div>
          </div>
        </div>
        <div className="cell">*Celcom Axiata (LTE)</div>
        <div className="cell">CELCOM / My Celcom / 502 19</div>
        <div className="cell">Yes</div>
      </div>
      <div className="row">
        <div className="iconCell">
          <div className="selected-outer-circle">
            <div className="selected-inner-circle">
              <span className="inside-content"></span>
            </div>
          </div>
        </div>
        <div className="cell">*Celcom Axiata (LTE)</div>
        <div className="cell">CELCOM / My Celcom / 502 19</div>
        <div className="cell">Yes</div>
      </div> */}
    </section>
  );
}

export default UITable;