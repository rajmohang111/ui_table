import "./Header.css";
import descending from "../../../images/arrow.svg"; // Tell webpack this JS file uses this image

function Header(props) {
  return (
    <header>
      <div className="noHeader"></div>
      {props.labels.map((col, index) => (
        <div className={(props.labels.length - 1) === index ? "last-col" : "col"}>
          {col}
          <img className="arrow" src={descending} alt="descending" />
        </div>
      ))}
    </header>
  );
}

export default Header;
