import { sort } from "./common";

test("test sort function", () => {
  let config = {
    label: "Name",
    sort: true,
    sortState: "normal",
    field: "name",
  };
  const tmpTblData = [
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
  let expected = [
    {
      name: "ACelcom Axiata",
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
      name: "BCelcom Axiata",
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

  let result = sort(config, [...tmpTblData]);
  expect(result).toEqual(expected);
  config = {
    label: "Name",
    sort: true,
    sortState: "asc",
    field: "name",
  };
  result = sort(config, [...tmpTblData]);
  console.debug(result);
  expected = [
    {
      name: "ECelcom Axiata",
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
      name: "ACelcom Axiata",
      mobile: "99999999",
      expiry: "Dec 2022",
      penalty: "$600",
    },
  ];
  expect(result).toEqual(expected);
  config = {
    label: "Name",
    sort: true,
    sortState: "des",
    field: "name",
  };
  result = sort(config, [...tmpTblData]);
  console.debug(result);
  expect(result).toEqual([...tmpTblData]);
});
