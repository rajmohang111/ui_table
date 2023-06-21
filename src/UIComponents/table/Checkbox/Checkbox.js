import tick from "../../../images/tick.svg"; // Tell webpack this JS file uses this image
import "./Checkbox.css";

function Checkbox(props) {
  return (
    <div className="iconCell">
      <div
        className={
          props.data.isSelected
            ? "selected-outer-checkbox"
            : "unselected-outer-checkbox"
        }
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

export default Checkbox;
