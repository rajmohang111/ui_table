import { memo } from "react";
import tick from "../../../images/tick.svg"; // Tell webpack this JS file uses this image
import "./Checkbox.css";

function Checkbox(props) {
  const onSelect = (e, index) => {
    let tmp = props.tblData.map((row, i) => {
      if (i === index) {
        if (row.isSelected) {
          return { ...row, isSelected: false };
        } else {
          return { ...row, isSelected: true };
        }
      }
      return { ...row };
    });
    props.updateSelection(tmp);
  };

  return (
    <div className="iconCell">
      <div
        className={
          props.data.isSelected
            ? "selected-outer-checkbox"
            : "unselected-outer-checkbox"
        }
        onClick={(e) => onSelect(e, props.index)}
      >
        <div className="inner-circle">
          {props.data.isSelected ? (
            <img className="tick" src={tick} alt="tick" />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Checkbox);
