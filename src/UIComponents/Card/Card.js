import { memo } from "react";
import "./Card.css";

function Card(props) {
  console.log(props.labels);
  return (
    <div className="cellWrap">
      {props.labels.map((col, index) => (
        <div
          className={
            props.labels.length - 1 === index && !props.lastRecord
              ? "data-wrap divider"
              : "data-wrap"
          }
        >
          <div className="card-cell-key"> {col.label}:</div>
          <div className="card-cell"> {props.data[col.field]}</div>
        </div>
      ))}
    </div>
  );
}

export default memo(Card);
