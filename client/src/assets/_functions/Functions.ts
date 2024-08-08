export const moneyFormat = (amount: number) => {
  const formatted = (amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatted
};

