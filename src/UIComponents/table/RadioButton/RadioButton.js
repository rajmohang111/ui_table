import "./RadioButton.css";

function RadioButton(props) {
  const radioSelect = (e, index) => {
    console.log(e, index);
    let res = props.tblData.map((a) => {
      return { ...a, isSelected: false };
    });

    res[index].isSelected = true;
    props.setData(res)
    console.log(res);
  };

  return (
    <div className="iconCell">
      <div
        className={
          props.data.isSelected ? "selected-outer-circle" : "outer-circle"
        }
        onClick={(e) => radioSelect(e, props.index)}
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

export default RadioButton;
