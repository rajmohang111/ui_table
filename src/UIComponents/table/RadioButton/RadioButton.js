import { memo } from "react";
import "./RadioButton.css";

function RadioButton(props) {
  const onSelect = (e, index) => {
    let tmp = props.tblData.map((row) => {
      return { ...row, isSelected: false };
    });

    tmp[index].isSelected = true;
    props.updateSelection(tmp);
  };

  return (
    <div className="iconCell">
      <div
        className={
          props.data.isSelected ? "selected-outer-circle" : "outer-circle"
        }
        onClick={(e) => onSelect(e, props.index)}
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
