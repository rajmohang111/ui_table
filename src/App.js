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
    },
    {
      operator: "ACelcom Axiata (LTE)",
      headsetDisplay: "BCELCOM / My Celcom / 502 19",
    },
    {
      operator: "Celcom Axiata (LTE)",
      headsetDisplay: "CELCOM / My Celcom / 502 19",
    },
    {
      operator: "Delcom Axiata (LTE)",
      headsetDisplay: "DCELCOM / My Celcom / 502 19",
    },
    {
      operator: "Eelcom Axiata (LTE)",
      headsetDisplay: "ECELCOM / My Celcom / 502 19",
    },
  ];

  const data1 = [
    {
      destination: "India",
      mins: 250,
      rate: "$0.03",
    },
    {
      destination: "AIndia",
      mins: 250,
      rate: "$0.03",
    },
    {
      destination: "BIndia",
      mins: 250,
      rate: "$0.03",
    },
    {
      destination: "DSIndia",
      mins: 250,
      rate: "$0.03",
    },
    {
      destination: "CIndia",
      mins: 250,
      rate: "$0.03",
    },
  ];

  const labels = [
    { label: "Operator", sort: true, sortState: "normal", field: "operator" },
    {
      label: "Headset Display",
      sort: true,
      sortState: "normal",
      field: "headsetDisplay",
    },
  ];

  const labels1 = [
    {
      label: "Destination",
      sort: true,
      sortState: "normal",
      field: "destination",
    },
    {
      label: "Mins",
      sort: true,
      sortState: "normal",
      field: "mins",
    },
    { label: "Rate/min", sort: false, field: "rate" },
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
      <div style={{ height: 100 }}></div>
      <UITable
        data={data1}
        labels={labels1}
        config={config}
        rowSelect={(selection) => rowSelect(selection)}
        sortedData={(selection) => sortedData(selection)}
      />
    </div>
  );
}

export default App;
