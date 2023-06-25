import { render, fireEvent } from "@testing-library/react";
import UITable from "./Table";

const data2 = [
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

test("test table header column count", () => {
  const args = {
    data: data2,
    labels: labels2,
    config: config2,
  };
  const { container } = render(<UITable {...args} />);
  const col = container.getElementsByClassName("col");
  const lastCol = container.getElementsByClassName("last-col");
  const unselectedCheckboxAll =
    container.getElementsByClassName("checkbox-all");
  expect(col.length).toBe(3);
  expect(lastCol.length).toBe(1);
  expect(unselectedCheckboxAll.length).toBe(1);
});

test("test table header column text", () => {
  const args = {
    data: data2,
    labels: labels2,
    config: config2,
  };
  const { getByText } = render(<UITable {...args} />);

  expect(getByText("Name")).toBeDefined();
  expect(getByText("Mobile")).toBeDefined();
  expect(getByText("Expiry")).toBeDefined();
  expect(getByText("Penalty")).toBeDefined();
});

test("test table header checkall: select all, unselct all, verify selection changes", () => {
  const args = {
    data: data2,
    labels: labels2,
    config: config2,
  };

  const rowSelect = jest.fn();

  const { getByText, container } = render(
    <UITable rowSelect={rowSelect} {...args} />
  );

  expect(
    container
      .getElementsByClassName("checkbox-all")[0]
      .getElementsByClassName("inner-circle")[0].innerHTML
  ).toBe("");

  fireEvent.click(container.getElementsByClassName("checkbox-all")[0]);
  expect(rowSelect).toHaveBeenCalledTimes(1);
  expect(
    container
      .getElementsByClassName("checkbox-all")[0]
      .getElementsByClassName("inner-circle")[0].innerHTML
  ).toEqual(`<img class="tick" src="tick.svg" alt="tick">`);

  const iconCell = container.getElementsByClassName("iconCell");
  for (let i = 0; i < iconCell.length; i++) {
    expect(
      iconCell[i].getElementsByClassName("inner-circle")[0].innerHTML
    ).toEqual(`<img class="tick" src="tick.svg" alt="tick">`);
  }

  fireEvent.click(container.getElementsByClassName("checkbox-all")[0]);
  const unselectediconCell = container.getElementsByClassName("iconCell");
  for (let i = 0; i < unselectediconCell.length; i++) {
    expect(
      unselectediconCell[i].getElementsByClassName("inner-circle")[0].innerHTML
    ).toEqual("");
  }
});

test("test table header : sorting icon should be present for sorting allowed columns", () => {
  const args = {
    data: data2,
    labels: labels2,
    config: config2,
  };
  const { getByText, container } = render(<UITable {...args} />);

  expect(
    container.getElementsByClassName("col")[0].getElementsByClassName("arrow")
      .length
  ).toBe(1);
  expect(
    container.getElementsByClassName("col")[1].getElementsByClassName("arrow")
      .length
  ).toBe(1);
  expect(
    container.getElementsByClassName("col")[2].getElementsByClassName("arrow")
      .length
  ).toBe(0);
});

test("test table header : sorting icon onclick change, call sortedData function", () => {
  const args = {
    data: data2,
    labels: labels2,
    config: config2,
  };
  const sortedData = jest.fn();

  const { getByText, container } = render(
    <UITable sortedData={sortedData} {...args} />
  );

  fireEvent.click(
    container
      .getElementsByClassName("col")[0]
      .getElementsByClassName("arrow")[0]
  );
  expect(sortedData).toHaveBeenCalledTimes(1);
  expect(container.getElementsByClassName("cell")[0].innerHTML).toBe(
    "ACelcom Axiata"
  );
  fireEvent.click(
    container
      .getElementsByClassName("col")[0]
      .getElementsByClassName("arrow")[0]
  );
  expect(container.getElementsByClassName("cell")[0].innerHTML).toBe(
    "ECelcom Axiata"
  );
  fireEvent.click(
    container
      .getElementsByClassName("col")[0]
      .getElementsByClassName("arrow")[0]
  );
  expect(container.getElementsByClassName("cell")[0].innerHTML).toBe(
    "BCelcom Axiata"
  );
});

test("test table header for radio selection: no select all option, click on radio option should call rowselect", () => {
  const args = {
    data: data2,
    labels: labels2,
    config: {
      selection: "radio",
      mobileLayout: "card",
      tableTitle: "UI Table",
    },
  };

  const rowSelect = jest.fn();

  const { getByText, container } = render(
    <UITable rowSelect={rowSelect} {...args} />
  );

  expect(container.getElementsByClassName("noHeader")[0].innerHTML).toBe("");
  fireEvent.click(container.getElementsByClassName("outer-circle")[0]);
  expect(rowSelect).toHaveBeenCalledTimes(1);
  expect(
    container.getElementsByClassName("selected-inner-circle").length
  ).toEqual(1);
});

test("test table header for no selection: no select all option", () => {
  const args = {
    data: data2,
    labels: labels2,
    config: {
      selection: null,
      mobileLayout: "card",
      tableTitle: "UI Table",
    },
  };

  const { getByText, container } = render(<UITable {...args} />);

  expect(container.getElementsByClassName("noHeader").length).toBe(0);
});
