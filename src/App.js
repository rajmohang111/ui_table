import "./App.css";
import UITable from "./UIComponents/table/UITable";

function App() {
  const config = { selection: "radio" };
  const config2 = { selection: "checkbox" };
  const config3 = { selection: null };

  const data = [
    {
      operator: "BCelcom Axiata (LTE)",
      headsetDisplay: "ACELCOM / My Celcom / 502 19",
      availability3G: "Yes",
      isSelected: true,
    },
    {
      operator: "ACelcom Axiata (LTE)",
      headsetDisplay: "BCELCOM / My Celcom / 502 19",
      availability3G: "Yes",
    },
    {
      operator: "Celcom Axiata (LTE)",
      headsetDisplay: "CELCOM / My Celcom / 502 19",
      availability3G: "Yes",
    },
    {
      operator: "Delcom Axiata (LTE)",
      headsetDisplay: "DCELCOM / My Celcom / 502 19",
      availability3G: "Yes",
    },
    {
      operator: "Eelcom Axiata (LTE)",
      headsetDisplay: "ECELCOM / My Celcom / 502 19",
      availability3G: "Yes",
    },
  ];

  const columns = ["operator", "headsetDisplay", "availability3G"];

  const labels = [
    { label: "Operator", sort: true, sortState: "normal", field: "operator" },
    {
      label: "Headset Display",
      sort: true,
      sortState: "normal",
      field: "headsetDisplay",
    },
    { label: "3G Availability", sort: false, field: "availability3G" },
  ];

  const rowSelect = (selectedRow) => {
    console.log("selectedRow", selectedRow);
  };

  const sortedData = (sortedData) => {
    console.log("sortedData", sortedData);
  };

  return (
    <div className="App">
      <div style={{ height: 100 }}></div>
      <UITable
        data={data}
        labels={labels}
        config={config}
        rowSelect={(selection) => rowSelect(selection)}
        sortedData={(selection) => sortedData(selection)}
      />
      <div style={{ height: 100 }}></div>
      <UITable
        data={data}
        labels={labels}
        config={config2}
        rowSelect={(selection) => rowSelect(selection)}
        sortedData={(selection) => sortedData(selection)}
      />
      <div style={{ height: 100 }}></div>
      <UITable
        data={data}
        labels={labels}
        config={config3}
        rowSelect={(selection) => rowSelect(selection)}
        sortedData={(selection) => sortedData(selection)}
      />
    </div>
  );
}

export default App;
