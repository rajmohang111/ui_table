import "./App.css";
import UITable from "./UIComponents/UITable/Table";

function App() {
  const config = {
    selection: "radio",
    mobileLayout: null,
    tableTitle: "UI Table",
  };
  const config2 = {
    selection: "checkbox",
    mobileLayout: "card",
    tableTitle: "UI Table",
  };
  const config3 = {
    selection: null,
    mobileLayout: null,
    tableTitle: "UI Table",
  };

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

  const data2 = [
    {
      name: "Celcom Axiata",
      mobile: "99999999",
      expiry: "Dec 2022",
      penalty: "$600",
    },
    {
      name: "BCelcom Axiata",
      mobile: "99999999",
      expiry: "Dec 2022",
      penalty: "$600",
    },
    {
      name: "ACelcom Axiata",
      mobile: "99999999",
      expiry: "Dec 2022",
      penalty: "$600",
    },
    {
      name: "DCelcom Axiata",
      mobile: "99999999",
      expiry: "Dec 2022",
      penalty: "$600",
    },
    {
      name: "ECelcom Axiata",
      mobile: "99999999",
      expiry: "Dec 2022",
      penalty: "$600",
    },
  ];

  const labels2 = [
    { label: "Name", sort: true, sortState: "normal", field: "name" },
    {
      label: "Mobile",
      sort: true,
      sortState: "normal",
      field: "mobile",
    },
    { label: "Expiry", sort: false, field: "expiry" },
    { label: "Penalty", sort: false, field: "penalty" },
  ];

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
        data={data2}
        labels={labels2}
        config={config2}
        rowSelect={(selection) => rowSelect(selection)}
        sortedData={(selection) => sortedData(selection)}
      />
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
        config={config}
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
      <div style={{ height: 100 }}></div>
    </div>
  );
}

export default App;
