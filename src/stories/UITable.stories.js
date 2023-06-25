import UITable from "../UIComponents/UITable/Table";

export default {
  title: "Components/UITable",
  component: UITable,
  argTypes: {
    rowSelect: { action: "rowSelect" },
    sortedData: { action: "sortedData" },
  },
};

const Template = (args) => <UITable {...args} />;

const data1 = [
  {
    name: "ACelcom Axiata",
    mobile: "99999999",
  },
  {
    name: "BCelcom Axiata",
    mobile: "99999999",
  },
  {
    name: "CCelcom Axiata",
    mobile: "99999999",
  },
  {
    name: "DCelcom Axiata",
    mobile: "99999999",
  },
  {
    name: "ECelcom Axiata",
    mobile: "99999999",
  },
];

const data2 = [
  {
    name: "ACelcom Axiata",
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
    name: "CCelcom Axiata",
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

const labels1 = [
  { label: "Name", sort: true, sortState: "normal", field: "name" },
  {
    label: "Mobile",
    sort: true,
    sortState: "normal",
    field: "mobile",
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

const config2 = {
  selection: "checkbox",
  mobileLayout: "card",
  tableTitle: "UI Table",
};

export const TableWithCheckbox = Template.bind({});

TableWithCheckbox.args = {
  data: data2,
  labels: labels2,
  config: config2,
};

const config1 = {
  selection: "radio",
  mobileLayout: "card",
  tableTitle: "UI Table",
};

export const TableWithRadioButton = Template.bind({});

TableWithRadioButton.args = {
  data: data2,
  labels: labels2,
  config: config1,
};

const config = {
  selection: null,
  mobileLayout: "card",
  tableTitle: "UI Table",
};

export const TableWithoutSelection = Template.bind({});

TableWithoutSelection.args = {
  data: data2,
  labels: labels2,
  config: config,
};

const config3 = { selection: null, mobileLayout: null };

export const TableWithoutMobileCardView = Template.bind({});

TableWithoutMobileCardView.args = {
  data: data1,
  labels: labels1,
  config: config3,
};
