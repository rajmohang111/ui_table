import "./App.css";
import descending from "./images/arrow.svg"; // Tell webpack this JS file uses this image
import tick from "./images/tick.svg"; // Tell webpack this JS file uses this image

function App() {
  return (
    <div className="App">
      <section>
        <header>
          <div className="noHeader"></div>
          <div className="col">
            Operator <img className="arrow" src={descending} alt="descending" />
          </div>
          <div className="col">Headset Display</div>
          <div className="col">3G Availability</div>
        </header>
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
        </div>
      </section>
    </div>
  );
}

export default App;
