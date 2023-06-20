import "./App.css";
import UITable from "./UIComponents/table/UITable";

function App() {
  const data = [
    {
      operator: "*Celcom Axiata (LTE)",
      headsetDisplay: "CELCOM / My Celcom / 502 19",
      availability3G: "Yes",
    },
    {
      operator: "*Celcom Axiata (LTE)",
      headsetDisplay: "CELCOM / My Celcom / 502 19",
      availability3G: "Yes",
    },
    {
      operator: "*Celcom Axiata (LTE)",
      headsetDisplay: "CELCOM / My Celcom / 502 19",
      availability3G: "Yes",
    },
    {
      operator: "*Celcom Axiata (LTE)",
      headsetDisplay: "CELCOM / My Celcom / 502 19",
      availability3G: "Yes",
    },
    {
      operator: "*Celcom Axiata (LTE)",
      headsetDisplay: "CELCOM / My Celcom / 502 19",
      availability3G: "Yes",
    },
  ];

  const columns = ["operator", "headsetDisplay", "availability3G"];

  const labels = ["Operator", "Headset Display", "3G Availability"];

  return (
    <div className="App">
      <UITable data={data} columns={columns} labels={labels} />
    </div>
  );
}

export default App;
