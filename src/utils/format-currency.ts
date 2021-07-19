const formatCurrency = (value: number): string => {
  const formatter = Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "USD",
  });

  return !!value ? formatter.format(value) : null;
};

export { formatCurrency };
