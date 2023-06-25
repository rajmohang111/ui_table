import { memo } from "react";
import tick from "../../images/tick.svg"; // Tell webpack this JS file uses this image
import "./Checkbox.css";

function Checkbox(props) {
  const onSelect = (index) => {
    let tmp = [];

    if (index === -1) {
      if (props.data.isSelected) {
        props.setSelectAll({ isSelected: false });
      } else {
        props.setSelectAll({ isSelected: true });
      }
      tmp = props.tblData.map((row) => {
        if (props.data.isSelected) {
          return { ...row, isSelected: false };
        } else {
          return { ...row, isSelected: true };
        }
      });
    } else {
      tmp = props.tblData.map((row, i) => {
        if (i === index) {
          if (row.isSelected) {
            return { ...row, isSelected: false };
          } else {
            return { ...row, isSelected: true };
          }
        }
        return { ...row };
      });
      if (tmp.every((element) => element.isSelected === true)) {
        props.setSelectAll({ isSelected: true });
      } else {
        props.setSelectAll({ isSelected: false });
      }
    }
    props.updateSelection(tmp);
  };

  return (
    <div
      className={`iconCell ${
        props.tblData.length - 1 === props.index && "noDivider"
      } ${props.index === -1 && "border-bottom-0"}`}
    >
      <div
        className={
          props.data?.isSelected
            ? `selected-outer-checkbox ${
                props.index === -1 ? "checkbox-all" : "checkbox"
              } ${
                props.index === -1 && props.windowWidth > 700 && "zero-margin"
              }`
            : `unselected-outer-checkbox ${
                props.index === -1 ? "checkbox-all" : "checkbox"
              } ${
                props.index === -1 && props.windowWidth > 700 && "zero-margin"
              }`
        }
        onClick={(e) => onSelect(props.index)}
      >
        <div className="inner-circle">
          {props.data?.isSelected ? (
            <img className={`tick`} src={tick} alt="tick" />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Checkbox);
