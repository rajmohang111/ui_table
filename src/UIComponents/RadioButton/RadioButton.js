import { memo } from "react";
import "./RadioButton.css";

function RadioButton(props) {
  const onSelect = (index) => {
    let tmp = props.tblData.map((row) => {
      return { ...row, isSelected: false };
    });

    tmp[index].isSelected = true;
    props.updateSelection(tmp);
  };

  return (
    <div className={props.tblData.length - 1 === props.index ? "iconCell noDivider" : "iconCell"}>
      <div
        className={
          props.data.isSelected ? "selected-outer-circle" : "outer-circle"
        }
        onClick={() => onSelect(props.index)}
      >
        {props.data.isSelected && (
          <div className="selected-inner-circle">
            <span className="inside-content"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(RadioButton);
