import "./UItable.css";
import tick from "../../images/tick.svg"; // Tell webpack this JS file uses this image
import Header from "./Header/Header";

function UITable(props) {
  return (
    <section>
      <Header labels={props.labels} />
      {props.data.map((data) => (
        <div className="row">
          <div className="iconCell">
            <div className="selected-outer-circle">
              <div className="selected-inner-circle">
                <span className="inside-content"></span>
              </div>
            </div>
          </div>
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
