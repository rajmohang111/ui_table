import "./App.css";
import UITable from "./UIComponents/table/UITable";

function App() {
  const config = { selection: "radio" };
  const config2 = { selection: "checkbox" };

  const data = [
    {
      operator: "*Celcom Axiata (LTE)",
      headsetDisplay: "CELCOM / My Celcom / 502 19",
      availability3G: "Yes",
      isSelected: true
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
      <div style={{ height: 100 }}></div>
      <UITable data={data} columns={columns} labels={labels} config={config} />
      <div style={{ height: 100 }}></div>
      <UITable data={data} columns={columns} labels={labels} config={config2} />
    </div>
  );
}

export default App;
