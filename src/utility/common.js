export const sort = (config, data) => {
  if (config.sortState === "normal") {
    data.sort((a, b) =>
      a[config.field] > b[config.field]
        ? 1
        : b[config.field] > a[config.field]
        ? -1
        : 0
    );
  } else if (config.sortState === "asc") {
    data.sort((a, b) =>
      a[config.field] < b[config.field]
        ? 1
        : b[config.field] < a[config.field]
        ? -1
        : 0
    );
  } else if (config.sortState === "des") {
    data = [...data];
  }
  return data;
};
